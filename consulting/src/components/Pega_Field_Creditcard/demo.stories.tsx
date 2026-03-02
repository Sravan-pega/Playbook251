/* eslint-disable react/jsx-no-useless-fragment */
import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { stateProps, configProps } from './mock';

import PegaFieldCreditcard from './index';

const meta: Meta<typeof PegaFieldCreditcard> = {
  title: 'Pega/Field/Credit Card',
  component: PegaFieldCreditcard,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: 'Placeholder text for the input field',
    },
    showCardLogo: {
      control: 'boolean',
      description: 'Whether to show the detected card logo',
    },
    formatNumber: {
      control: 'boolean',
      description: 'Whether to format the card number with spaces',
    },
    value: {
      control: 'text',
      description: 'Initial card number value',
    },
  },
};

export default meta;
type Story = StoryObj<typeof PegaFieldCreditcard>;

// Sample card numbers for testing
const sampleCards = {
  visa: '4532015112830366',
  mastercard: '5555555555554444',
  amex: '378282246310005',
  discover: '6011111111111117',
  diners: '30569309025904',
  jcb: '3530111333300000'
};

export const Default: Story = {
  args: {
    label: 'Credit Card Number',
    placeholder: 'Enter credit card number',
    showCardLogo: true,
    formatNumber: true,
    testId: 'credit-card-default',
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
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const WithVisaCard: Story = {
  args: {
    label: 'Visa Card Example',
    placeholder: 'Visa test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'visa-demo',
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.visa);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
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
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const WithMastercard: Story = {
  args: {
    label: 'Mastercard Example',
    placeholder: 'Mastercard test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'mastercard-demo',
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.mastercard);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
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
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const WithAmericanExpress: Story = {
  args: {
    label: 'American Express Example',
    placeholder: 'AmEx test card',
    showCardLogo: true,
    formatNumber: true,
    testId: 'amex-demo',
  },
  render: (args: any) => {
    const [value, setValue] = useState(sampleCards.amex);
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
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
    return <PegaFieldCreditcard {...props} {...args} />;
  }
};

export const LogoTest: Story = {
  args: {
    label: 'Logo Test',
    placeholder: 'Should show Visa logo',
    showCardLogo: true,
    formatNumber: true,
    testId: 'logo-test',
  },
  render: (args: any) => {
    const [value, setValue] = useState('4111111111111111');
    const props = {
      value,
      getPConnect: () => ({
        getStateProps: () => ({ value: '.CreditCard', hasSuggestions: false }),
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
    return (
      <div style={{ padding: '20px' }}>
        <h3>Logo Test - Should show Visa logo immediately</h3>
        <PegaFieldCreditcard {...props} {...args} />
        <p>Card number: {value}</p>
      </div>
    );
  }
};

