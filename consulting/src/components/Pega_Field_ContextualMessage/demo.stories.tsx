/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import { configProps } from './mock';

import PegaFieldContextualMessage from './index';

const meta: Meta<typeof PegaFieldContextualMessage> = {
  title: 'Pega/Field/Contextual Message',
  component: PegaFieldContextualMessage,
  excludeStories: /.*Data$/,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `
**Contextual Message** displays an inline, role-based notification banner inside a Pega Constellation form or page.

It supports four severity levels — each with a distinct icon, color, and semantic meaning — and accepts either plain text or sanitized HTML as its message body.

### Business use case
This component is used to display a message based on user operations or as a static display — for example, confirming a submitted action, warning before a destructive step, or surfacing guidance relevant to the current form context.

### Why a custom component?
This component exists outside of the Pega out-of-the-box (OOTB) alert components for two reasons:

- **Distinct visual style** — it provides tighter control over layout, iconography, and color, aligning with the application's design language rather than the default Pega theme.
- **Avoiding confusion with system messages** — OOTB alerts are also used for system-generated notifications (validation errors, server messages). Using a separate custom component keeps user-facing contextual messages visually distinct and prevents them from being mistaken for system feedback.

### When to use
| Type | Color | Use for |
|---|---|---|
| \`urgent\` | 🔴 Red | Errors, required actions, blocking issues |
| \`info\` | 🔵 Blue | Neutral tips, guidance, background context |
| \`warning\` | 🟡 Amber | Non-blocking cautions, advisories |
| \`success\` | 🟢 Green | Confirmation of a completed action |

### HTML message support
Pass an HTML string to \`message\` to render rich content (links, lists, bold text).
\`<script>\` tags and inline event handlers are stripped before rendering.

### Accessibility
The alert container has \`role="alert"\` and \`aria-live="polite"\` so screen readers announce it on mount.
        `.trim(),
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['urgent', 'info', 'warning', 'success'],
      description: 'Controls the icon, color, and semantic meaning of the alert.',
      table: {
        type: { summary: "'urgent' | 'info' | 'warning' | 'success'" },
        defaultValue: { summary: 'info' },
      },
    },
    title: {
      control: 'text',
      description: 'Short headline displayed in bold at the top of the alert.',
      table: {
        type: { summary: 'string' },
      },
    },
    message: {
      control: 'text',
      description: 'Body text. Accepts plain text or a sanitized HTML string (e.g. links, lists).',
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
type Story = StoryObj<typeof PegaFieldContextualMessage>;

const basePConnect = () => ({
  getStateProps: () => ({ value: '.ContextualMessage', hasSuggestions: false }),
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
  name: 'Default (Info)',
  parameters: {
    docs: {
      description: {
        story: 'The default state using the `info` type. A good starting point when you need a neutral, non-urgent message.',
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  type="info"
  title="Information"
  message="Here is some helpful context for this section."
/>`,
      },
    },
  },
  args: {
    type: configProps.type as any,
    title: configProps.title,
    message: configProps.message,
    testId: configProps.testId,
  },
  render: (args: any) => (
    <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
  )
};

export const Urgent: Story = {
  name: 'Urgent',
  parameters: {
    docs: {
      description: {
        story: 'Use `urgent` for errors or actions that block the user. The red icon and color draw immediate attention.',
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  type="urgent"
  title="Action Required"
  message="This is a critical alert. Please take immediate action."
/>`,
      },
    },
  },
  args: {
    type: 'urgent',
    title: 'Action Required',
    message: 'This is a critical alert. Please take immediate action.',
    testId: 'alert-urgent',
  },
  render: (args: any) => (
    <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
  )
};

export const Info: Story = {
  name: 'Info',
  parameters: {
    docs: {
      description: {
        story: 'Use `info` for neutral tips, guidance, or background context that does not require action.',
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  type="info"
  title="Did You Know?"
  message="This is an informational message with helpful context."
/>`,
      },
    },
  },
  args: {
    type: 'info',
    title: 'Did You Know?',
    message: 'This is an informational message with helpful context.',
    testId: 'alert-info',
  },
  render: (args: any) => (
    <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
  )
};

export const Warning: Story = {
  name: 'Warning',
  parameters: {
    docs: {
      description: {
        story: 'Use `warning` for non-blocking cautions — the user can proceed but should be aware of a potential issue.',
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  type="warning"
  title="Please Note"
  message="This action may have unintended consequences."
/>`,
      },
    },
  },
  args: {
    type: 'warning',
    title: 'Please Note',
    message: 'This action may have unintended consequences.',
    testId: 'alert-warning',
  },
  render: (args: any) => (
    <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
  )
};

export const Success: Story = {
  name: 'Success',
  parameters: {
    docs: {
      description: {
        story: 'Use `success` to confirm a completed action. Display this after a form submission or save operation.',
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  type="success"
  title="All Done!"
  message="Your changes have been saved successfully."
/>`,
      },
    },
  },
  args: {
    type: 'success',
    title: 'All Done!',
    message: 'Your changes have been saved successfully.',
    testId: 'alert-success',
  },
  render: (args: any) => (
    <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
  )
};

export const WithHtmlMessage: Story = {
  name: 'HTML Message',
  parameters: {
    docs: {
      description: {
        story: `Pass an HTML string to \`message\` to render rich content such as links and lists.
\`<script>\` tags and inline event handlers are stripped automatically before rendering.`,
      },
      source: {
        code: `<PegaFieldContextualMessage
  getPConnect={getPConnect}
  type="info"
  title="Rich Content"
  message='Visit our <a href="#">help center</a> for more details.<ul><li>Step one</li><li>Step two</li></ul>'
/>`,
      },
    },
  },
  args: {
    type: 'info',
    title: 'Rich Content',
    message: 'Visit our <a href="#">help center</a> for more details.<ul><li>Step one</li><li>Step two</li></ul>',
    testId: 'alert-html',
  },
  render: (args: any) => (
    <PegaFieldContextualMessage getPConnect={basePConnect} {...args} />
  )
};
