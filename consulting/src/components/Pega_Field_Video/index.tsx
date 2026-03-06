import { useState, useEffect, useCallback, useRef } from 'react';
import { withConfiguration } from '@pega/cosmos-react-core';

import type { PConnFieldProps } from '../shared/PConnProps';
import '../shared/create-nonce';

import StyledPegaFieldVideoWrapper from './styles';

// interface for props
interface PegaFieldVideoProps extends Partial<PConnFieldProps> {
  getPConnect?: () => any;
  width?: string | number;
  height?: string | number;
  autoplay?: boolean;
  muted?: boolean;
  loop?: boolean;
  datapage?: string;
  datapageparams?: string;
  /** If true, the videoSource is treated as a Base64-encoded string.
   *  If false (default), it is treated as a URL. */
  isBase64?: boolean;
  /** Direct video source (Base64 string or URL). When provided, skips data-page fetching. */
  videoSource?: string;
  testId?: string;
}

// Interface for data page response
interface DataPageVideoData extends Partial<PegaFieldVideoProps> {
  videoSource: string;
}

// Default fallback video data for Storybook
const DEFAULT_FALLBACK_VIDEOS = {
  default: 'https://www.w3schools.com/html/mov_bbb.mp4',
  autoplay: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
  responsive: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4'
};

function PegaFieldVideo(props: PegaFieldVideoProps) {
  const {
    getPConnect,
    width = '100%',
    height = 'auto',
    autoplay = false,
    muted = false,
    loop = false,
    isBase64 = false,
    videoSource: directVideoSource,
    testId,
    datapage,
    datapageparams
  } = props;

  const [videoData, setVideoData] = useState<DataPageVideoData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Stable ref for pConn — avoids re-creating callbacks on every render
  const pConnRef = useRef<any>(null);
  try {
    pConnRef.current =
      getPConnect && typeof getPConnect === 'function' ? getPConnect() : null;
  } catch {
    pConnRef.current = null;
  }

  const isStorybookEnvironment =
    !pConnRef.current ||
    !getPConnect ||
    typeof getPConnect !== 'function' ||
    !(window as any).PCore;

  const parseDataPageParams = useCallback(
    (params: string | undefined): Record<string, any> => {
      if (!params) return {};
      try {
        const getParamValue = (e: string) => {
          if (e === null || e === '') return e;
          const eachVal = e.split(':');
          if (eachVal[1].trim().startsWith('.')) {
            let propVal = eachVal[1].trim();
            const lastIndex = propVal.lastIndexOf('.');
            if (lastIndex === 0) {
              propVal = pConnRef.current.getValue(propVal);
            } else {
              const searchProp = propVal.substring(lastIndex);
              propVal = pConnRef.current.getValue(
                searchProp,
                `caseInfo.content${propVal.substring(0, lastIndex)}`
              );
            }
            return `${JSON.stringify(eachVal[0].trim())}:${JSON.stringify(propVal)}`;
          }
          return `${JSON.stringify(eachVal[0].trim())}:${JSON.stringify(eachVal[1].trim())}`;
        };
        const dPageParams = `{${params.split(',').map(getParamValue).join(',')}}`;
        return JSON.parse(dPageParams);
      } catch {
        return {};
      }
    },
    [] // pConnRef.current is accessed via ref — no dependency needed
  );

  const getStorybookFallbackData = useCallback(
    (_dp: string, params: string | undefined): DataPageVideoData => {
      const parsedParams = parseDataPageParams(params);
      let videoSource = DEFAULT_FALLBACK_VIDEOS.default;
      if (parsedParams.videoId === 'autoplay-video') {
        videoSource = DEFAULT_FALLBACK_VIDEOS.autoplay;
      } else if (parsedParams.videoId === 'responsive-video') {
        videoSource = DEFAULT_FALLBACK_VIDEOS.responsive;
      }
      return {
        videoSource,
        width: parsedParams.width ?? width,
        height: parsedParams.height ?? height,
        autoplay: parsedParams.autoplay ?? autoplay,
        muted: parsedParams.muted ?? muted,
        loop: parsedParams.loop ?? loop
      };
    },
    [parseDataPageParams, width, height, autoplay, muted, loop]
  );

  const fetchVideoData = useCallback(async () => {
    if (!datapage) return;

    if (isStorybookEnvironment) {
      setVideoData(getStorybookFallbackData(datapage, datapageparams));
      return;
    }

    const pConn = pConnRef.current;
    if (!pConn) return;

    setLoading(true);
    setError(null);

    try {
      const PCore = (window as any).PCore;
      if (!PCore) throw new Error('PCore not available');

      const params = parseDataPageParams(datapageparams);
      const dataPageResponse = await PCore.getDataPageUtils().getPageDataAsync(
        datapage,
        pConn.getContextName && pConn.getContextName(),
        params
      );

      const responseData = dataPageResponse?.data ?? dataPageResponse;
      if (responseData) {
        setVideoData(responseData);
      } else {
        throw new Error('No data returned from data page');
      }
    } catch (err) {
      setError(`Failed to load video data: ${err instanceof Error ? err.message : 'Unknown error'}`);
    } finally {
      setLoading(false);
    }
  }, [datapage, datapageparams, isStorybookEnvironment, getStorybookFallbackData, parseDataPageParams]);

  useEffect(() => {
    // If a direct videoSource prop is supplied, skip data-page fetching entirely
    if (directVideoSource !== undefined) return;

    if (datapage) {
      fetchVideoData();
    } else if (isStorybookEnvironment) {
      setVideoData(getStorybookFallbackData('D_VideoData', undefined));
    }
  }, [datapage, directVideoSource, fetchVideoData, isStorybookEnvironment, getStorybookFallbackData]);

  // ── Short-circuit: render directly when videoSource is provided as a prop ──
  if (directVideoSource !== undefined) {
    if (!directVideoSource) {
      return (
        <StyledPegaFieldVideoWrapper data-testid={testId}>
          <div className='no-video-message'>No video source provided</div>
        </StyledPegaFieldVideoWrapper>
      );
    }

    const directSrc = isBase64
      ? directVideoSource.startsWith('data:')
        ? directVideoSource
        : `data:video/mp4;base64,${directVideoSource}`
      : directVideoSource;

    const directVideoProps = {
      controls: true,
      width,
      height,
      autoPlay: autoplay,
      muted,
      loop,
      className: 'video-player'
    };

    return (
      <StyledPegaFieldVideoWrapper data-testid={testId}>
        {isBase64 ? (
          <video {...directVideoProps}>
            <source src={directSrc} type='video/mp4' />
            <track kind='captions' src='' srcLang='en' label='English' />
            Your browser does not support the video tag.
          </video>
        ) : (
          <video {...directVideoProps}>
            <source src={directSrc} type='video/mp4' />
            <source src={directSrc} type='video/webm' />
            <source src={directSrc} type='video/ogg' />
            <track kind='captions' src='' srcLang='en' label='English' />
            Your browser does not support the video tag.
          </video>
        )}
      </StyledPegaFieldVideoWrapper>
    );
  }

  if (!datapage && !isStorybookEnvironment) {
    return (
      <StyledPegaFieldVideoWrapper data-testid={testId}>
        <div className='no-video-message'>No data page configured</div>
      </StyledPegaFieldVideoWrapper>
    );
  }

  if (loading) {
    return (
      <StyledPegaFieldVideoWrapper data-testid={testId}>
        <div className='loading-message'>Loading video…</div>
      </StyledPegaFieldVideoWrapper>
    );
  }

  if (error) {
    return (
      <StyledPegaFieldVideoWrapper data-testid={testId}>
        <div className='error-message'>{error}</div>
      </StyledPegaFieldVideoWrapper>
    );
  }

  const {
    videoSource = '',
    width: dataWidth = width,
    height: dataHeight = height,
    autoplay: dataAutoplay = autoplay,
    muted: dataMuted = muted,
    loop: dataLoop = loop
  } = videoData ?? {};

  if (!videoSource) {
    return (
      <StyledPegaFieldVideoWrapper data-testid={testId}>
        <div className='no-video-message'>No video source provided from data page</div>
      </StyledPegaFieldVideoWrapper>
    );
  }

  // Resolve the src: Base64 strings need a data URI prefix; URLs are used as-is
  const resolvedSrc = isBase64
    ? videoSource.startsWith('data:')
      ? videoSource                          // already a full data URI
      : `data:video/mp4;base64,${videoSource}` // raw Base64 — wrap it
    : videoSource;                           // plain URL

  const videoProps = {
    controls: true,
    width: dataWidth,
    height: dataHeight,
    autoPlay: dataAutoplay,
    muted: dataMuted,
    loop: dataLoop,
    className: 'video-player'
  };

  return (
    <StyledPegaFieldVideoWrapper data-testid={testId}>
      {isBase64 ? (
        // Base64: single <source> with the data URI — no need for multiple format fallbacks
        <video {...videoProps}>
          <source src={resolvedSrc} type='video/mp4' />
          <track kind='captions' src='' srcLang='en' label='English' />
          Your browser does not support the video tag.
        </video>
      ) : (
        // URL: provide mp4 / webm / ogg fallback sources
        <video {...videoProps}>
          <source src={resolvedSrc} type='video/mp4' />
          <source src={resolvedSrc} type='video/webm' />
          <source src={resolvedSrc} type='video/ogg' />
          <track kind='captions' src='' srcLang='en' label='English' />
          Your browser does not support the video tag.
        </video>
      )}
    </StyledPegaFieldVideoWrapper>
  );
}

export default withConfiguration(PegaFieldVideo);
