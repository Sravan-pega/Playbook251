/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps, configProps } from './mock';

import PegaFieldMaskedwithEyeIcon from './index';

const meta: Meta<typeof PegaFieldMaskedwithEyeIcon> = {
  title: 'Pega/Field/Masked Input',
  component: PegaFieldMaskedwithEyeIcon,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    defaultMasked: {
      control: 'boolean',
      description: 'Whether the input is masked by default',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    readOnly: {
      control: 'boolean',
      description: 'Whether the input is read-only',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PegaFieldMaskedwithEyeIcon>;

export const Default: Story = {
  args: {
    label: configProps.label,
    placeholder: configProps.placeholder,
    testId: configProps.testId,
    readOnly: configProps.readOnly,
    disabled: configProps.disabled,
    required: configProps.required,
    hideLabel: configProps.hideLabel,
    defaultMasked: true,
  },
  render: (args: any) => {
    const [value, setValue] = useState(configProps.value);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};

export const Unmasked: Story = {
  args: {
    label: 'Visible Input',
    placeholder: 'Text is visible',
    testId: 'masked-unmasked',
    readOnly: false,
    disabled: false,
    required: false,
    hideLabel: false,
    defaultMasked: false,
  },
  render: (args: any) => {
    const [value, setValue] = useState('');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};

export const Disabled: Story = {
  args: {
    label: 'Disabled Input',
    placeholder: 'Cannot interact',
    testId: 'masked-disabled',
    disabled: true,
    readOnly: false,
    required: false,
    hideLabel: false,
    defaultMasked: true,
  },
  render: (args: any) => {
    const [value, setValue] = useState('secret123');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};

export const ReadOnly: Story = {
  args: {
    label: 'Read-Only Input',
    placeholder: '',
    testId: 'masked-readonly',
    disabled: false,
    readOnly: true,
    required: false,
    hideLabel: false,
    defaultMasked: true,
  },
  render: (args: any) => {
    const [value, setValue] = useState('readonly-value');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => stateProps,
        getActionsApi: () => ({
          updateFieldValue: (_propName: string, theValue: any) => setValue(theValue),
          triggerFieldChange: () => {/* nothing */}
        }),
        ignoreSuggestion: () => {/* nothing */},
        acceptSuggestion: () => {/* nothing */},
        setInheritedProps: () => {/* nothing */},
        resolveConfigProps: () => {/* nothing */}
      })
    };
    return <PegaFieldMaskedwithEyeIcon {...props} {...args} />;
  }
};
