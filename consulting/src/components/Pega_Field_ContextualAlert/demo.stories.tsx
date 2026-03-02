/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import { configProps } from './mock';

import PegaFieldContextualAlert from './index';

const meta: Meta<typeof PegaFieldContextualAlert> = {
  title: 'Pega/Field/Contextual Alert',
  component: PegaFieldContextualAlert,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['urgent', 'info', 'warning', 'success'],
      description: 'The alert type which controls icon and color',
    },
    title: {
      control: 'text',
      description: 'Title text displayed in the alert header',
    },
    message: {
      control: 'text',
      description: 'Message body — supports plain text or HTML',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PegaFieldContextualAlert>;

const basePConnect = () => ({
  getStateProps: () => ({ value: '.ContextualAlert', hasSuggestions: false }),
  getActionsApi: () => ({
    updateFieldValue: () => {/* nothing */},
    triggerFieldChange: () => {/* nothing */}
  }),
  ignoreSuggestion: () => {/* nothing */},
  acceptSuggestion: () => {/* nothing */},
  setInheritedProps: () => {/* nothing */},
  resolveConfigProps: () => {/* nothing */}
});

export const Default: Story = {
  args: {
    type: configProps.type as any,
    title: configProps.title,
    message: configProps.message,
    testId: configProps.testId,
  },
  render: (args: any) => (
    <PegaFieldContextualAlert getPConnect={basePConnect} {...args} />
  )
};

export const Urgent: Story = {
  args: {
    type: 'urgent',
    title: 'Action Required',
    message: 'This is a critical alert. Please take immediate action.',
    testId: 'alert-urgent',
  },
  render: (args: any) => (
    <PegaFieldContextualAlert getPConnect={basePConnect} {...args} />
  )
};

export const Info: Story = {
  args: {
    type: 'info',
    title: 'Did You Know?',
    message: 'This is an informational message with helpful context.',
    testId: 'alert-info',
  },
  render: (args: any) => (
    <PegaFieldContextualAlert getPConnect={basePConnect} {...args} />
  )
};

export const Warning: Story = {
  args: {
    type: 'warning',
    title: 'Please Note',
    message: 'This action may have unintended consequences.',
    testId: 'alert-warning',
  },
  render: (args: any) => (
    <PegaFieldContextualAlert getPConnect={basePConnect} {...args} />
  )
};

export const Success: Story = {
  args: {
    type: 'success',
    title: 'All Done!',
    message: 'Your changes have been saved successfully.',
    testId: 'alert-success',
  },
  render: (args: any) => (
    <PegaFieldContextualAlert getPConnect={basePConnect} {...args} />
  )
};

export const WithHtmlMessage: Story = {
  args: {
    type: 'info',
    title: 'Rich Content',
    message: 'Visit our <a href="#">help center</a> for more details.<ul><li>Step one</li><li>Step two</li></ul>',
    testId: 'alert-html',
  },
  render: (args: any) => (
    <PegaFieldContextualAlert getPConnect={basePConnect} {...args} />
  )
};
