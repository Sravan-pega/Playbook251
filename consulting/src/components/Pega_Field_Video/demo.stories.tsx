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
  argTypes: {
    width: { control: 'text', description: 'Width of the video player' },
    height: { control: 'text', description: 'Height of the video player' },
    autoplay: { control: 'boolean', description: 'Autoplay the video on load' },
    muted: { control: 'boolean', description: 'Mute the video' },
    loop: { control: 'boolean', description: 'Loop the video' },
    isBase64: {
      control: 'boolean',
      description:
        'When true, the videoSource from the data page is treated as a Base64-encoded string. When false (default), it is treated as a URL.'
    },
    datapage: { control: 'text', description: 'Pega data page name' },
    datapageparams: {
      control: 'text',
      description: 'Comma-separated key:value parameters for the data page'
    }
  }
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
  args: {
    ...configProps,
    getPConnect: basePConnect as any,
    autoplay: true,
    muted: true
  }
};

export const Autoplay: Story = {
  args: {
    ...configPropsAutoplay,
    getPConnect: basePConnect as any
  }
};

export const Responsive: Story = {
  args: {
    ...configPropsResponsive,
    getPConnect: basePConnect as any
  }
};

export const Loop: Story = {
  args: {
    ...configProps,
    loop: true,
    getPConnect: basePConnect as any
  }
};

export const WithDataPage: Story = {
  args: {
    ...configPropsWithDataPage,
    getPConnect: basePConnect as any
  }
};

export const Base64Video: Story = {
  name: 'Base64 Source',
  args: {
    ...configPropsBase64,
    getPConnect: basePConnect as any,
    autoplay: true
  }
};
