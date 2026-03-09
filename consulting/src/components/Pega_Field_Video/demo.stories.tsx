import type { Meta, StoryObj } from '@storybook/react';

import PegaFieldVideo from './index';
import {
  configProps,
  configPropsAutoplay,
  configPropsResponsive,
  configPropsWithDataPage,
  configPropsBase64
} from './mock';

const meta: Meta<typeof PegaFieldVideo> = {
  title: 'Pega/Field/Video',
  component: PegaFieldVideo,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
**Video** is an embedded video player component for Pega Constellation forms and dashboards. It loads its source from a Pega data page — either as a URL or a Base64-encoded string — and renders a fully controls-enabled player with configurable autoplay, mute, and loop behaviour.

### Business use case
This component is used to display a video wherever one is needed within the application. Common scenarios include:

- **Onboarding & getting started** — when a customer logs in for the first time, a welcome or getting-started video can be surfaced directly on the dashboard to guide them through the application.
- **Product or feature showcases** — highlight reels, feature walkthroughs, or promotional content can be embedded in context without navigating away from the form or page.
- **Complex use-case guidance** — for multi-step or technically involved processes, a short instructional video placed inline is far more effective than static text.
- **CSR instructions** — Customer Service Representatives can be shown specific instructional videos relevant to the case or task they are currently handling, reducing training overhead and errors.

### Why a custom component?
The component is required because Pega does not provide a native video player widget out of the box. Wherever a video needs to be surfaced — whether on a dashboard, a case view, or a portal page — this component provides a consistent, configurable player that integrates cleanly with the Pega data page pattern.

### Data source modes
| Mode | \`isBase64\` | Description |
|---|---|---|
| URL | \`false\` (default) | The data page returns a video URL. The player falls back through mp4 → webm → ogg. |
| Base64 | \`true\` | The data page returns a Base64-encoded video string. The component wraps it in a \`data:video/mp4;base64,…\` URI automatically. |

### Storybook note
In Storybook, \`getPConnect\` does not have access to a live Pega environment. The component detects this automatically and falls back to a set of sample public video URLs so every story renders without a Pega backend.
        `.trim(),
      },
    },
  },
  argTypes: {
    width: {
      control: 'text',
      description: 'Width of the video player. Accepts any valid CSS value (e.g. `100%`, `640px`).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: '100%' },
      },
    },
    height: {
      control: 'text',
      description: 'Height of the video player. Accepts any valid CSS value (e.g. `auto`, `360px`).',
      table: {
        type: { summary: 'string | number' },
        defaultValue: { summary: 'auto' },
      },
    },
    autoplay: {
      control: 'boolean',
      description: 'When `true`, the video starts playing automatically on load. Most browsers require `muted` to also be `true` for autoplay to work.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    muted: {
      control: 'boolean',
      description: 'When `true`, the video is muted. Required by most browsers when `autoplay` is enabled.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    loop: {
      control: 'boolean',
      description: 'When `true`, the video restarts automatically when it reaches the end.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    isBase64: {
      control: 'boolean',
      description: 'When `true`, the video source returned by the data page is treated as a Base64-encoded string and wrapped in a `data:video/mp4;base64,…` URI. When `false` (default), the source is used as a plain URL.',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: 'false' },
      },
    },
    datapage: {
      control: 'text',
      description: 'Name of the Pega data page that returns the video source (e.g. `D_VideoData`). If omitted, the component uses a built-in fallback in Storybook.',
      table: {
        type: { summary: 'string' },
      },
    },
    datapageparams: {
      control: 'text',
      description: 'Comma-separated `key:value` parameters passed to the data page (e.g. `videoId:getting-started`). Supports property references using dot notation.',
      table: {
        type: { summary: 'string' },
      },
    },
    testId: {
      control: 'text',
      description: 'Value applied to the `data-testid` attribute for automated testing.',
      table: {
        type: { summary: 'string' },
        category: 'Testing',
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof PegaFieldVideo>;

const basePConnect = () => ({
  getActionsApi: () => ({
    updateFieldValue: () => {},
    triggerFieldChange: () => {}
  }),
  getContextName: () => 'app/primary_1',
  getValue: (prop: string) => prop,
  ignoreSuggestion: () => {},
  acceptSuggestion: () => {},
  setInheritedProps: () => {},
  resolveConfigProps: () => {}
});

export const Default: Story = {
  name: 'Default',
  parameters: {
    docs: {
      description: {
        story: 'The player in its standard configuration — full width, with controls, autoplay on (muted to satisfy browser policy). This represents the most common usage for a dashboard or portal page.',
      },
      source: {
        code: `<PegaFieldVideo
  getPConnect={getPConnect}
  datapage="D_VideoData"
  width="100%"
  height="auto"
  autoplay={true}
  muted={true}
/>`,
      },
    },
  },
  args: {
    ...configProps,
    getPConnect: basePConnect as any,
    autoplay: true,
    muted: true
  }
};

export const Autoplay: Story = {
  name: 'Autoplay',
  parameters: {
    docs: {
      description: {
        story: 'Autoplay is enabled with `muted={true}`. Use this for ambient or background videos — such as a welcome highlight reel — where the video should start immediately without requiring user interaction.',
      },
      source: {
        code: `<PegaFieldVideo
  getPConnect={getPConnect}
  datapage="D_VideoData"
  datapageparams="videoId:autoplay-video"
  autoplay={true}
  muted={true}
/>`,
      },
    },
  },
  args: {
    ...configPropsAutoplay,
    getPConnect: basePConnect as any
  }
};

export const Responsive: Story = {
  name: 'Responsive',
  parameters: {
    docs: {
      description: {
        story: 'Width set to `100%` and height to `auto` so the player scales fluidly with its container. Recommended for dashboard tiles or any layout where the available width varies.',
      },
      source: {
        code: `<PegaFieldVideo
  getPConnect={getPConnect}
  datapage="D_VideoData"
  datapageparams="videoId:responsive-video"
  width="100%"
  height="auto"
/>`,
      },
    },
  },
  args: {
    ...configPropsResponsive,
    getPConnect: basePConnect as any
  }
};

export const Loop: Story = {
  name: 'Loop',
  parameters: {
    docs: {
      description: {
        story: 'The video restarts automatically when it ends. Useful for short instructional clips or ambient showcase videos that should play continuously without user intervention.',
      },
      source: {
        code: `<PegaFieldVideo
  getPConnect={getPConnect}
  datapage="D_VideoData"
  loop={true}
/>`,
      },
    },
  },
  args: {
    ...configProps,
    loop: true,
    getPConnect: basePConnect as any
  }
};

export const WithDataPage: Story = {
  name: 'With data page',
  parameters: {
    docs: {
      description: {
        story: 'Explicit `datapage` and `datapageparams` props configured. In a live Pega environment, the component calls this data page at runtime and uses the returned URL as the video source. In Storybook, a fallback URL is used automatically.',
      },
      source: {
        code: `<PegaFieldVideo
  getPConnect={getPConnect}
  datapage="D_VideoData"
  datapageparams="videoId:default-video"
/>`,
      },
    },
  },
  args: {
    ...configPropsWithDataPage,
    getPConnect: basePConnect as any
  }
};

export const Base64Video: Story = {
  name: 'Base64 source',
  parameters: {
    docs: {
      description: {
        story: `When the Pega data page returns a Base64-encoded video string instead of a URL, set \`isBase64={true}\`. The component automatically wraps the raw string in a \`data:video/mp4;base64,…\` URI before passing it to the \`<video>\` element — no additional handling required on the data page side.`,
      },
      source: {
        code: `<PegaFieldVideo
  getPConnect={getPConnect}
  datapage="D_VideoData"
  isBase64={true}
/>`,
      },
    },
  },
  args: {
    ...configPropsBase64,
    getPConnect: basePConnect as any,
    autoplay: true
  }
};
