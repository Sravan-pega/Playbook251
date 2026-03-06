import styled, { css } from 'styled-components';

export default styled.div(() => {
  return css`
    width: 100%;

    .video-player {
      display: block;
      max-width: 100%;
      border-radius: 0.375rem;
      background-color: #000;
    }

    .loading-message,
    .no-video-message {
      padding: 1rem;
      color: #6b7280;
      font-style: italic;
    }

    .error-message {
      padding: 1rem;
      color: #dc2626;
    }
  `;
});
