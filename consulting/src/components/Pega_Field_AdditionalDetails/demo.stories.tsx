/* eslint-disable react/jsx-no-useless-fragment */
import type { Meta, StoryObj } from '@storybook/react';

import PegaFieldAdditionalDetails from './index';
import { configProps } from './mock';

const meta: Meta<typeof PegaFieldAdditionalDetails> = {
  title: 'Pega/Field/Additional Details',
  component: PegaFieldAdditionalDetails,
  excludeStories: /.*Data$/,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: `
## Additional Details

The **Additional Details** component displays a compact audit trail table listing key lifecycle events for a case or record — such as creation, last update, and resolution — showing the responsible operator and timestamp for each event.

Clicking the **Details** button on any row opens a modal with a richer breakdown of that operator's information, including their avatar, user ID, and formatted date/time.

---

### Business Use Case

In case management and service workflows, agents and supervisors often need to quickly answer questions like:

- *"Who created this case and when?"*
- *"Who last updated it?"*
- *"When was this ticket resolved, and by whom?"*

This component surfaces that audit context directly on the case view, without requiring navigation to a separate audit log screen. It is especially useful on **case summary** pages, **work queues**, and **resolve/close screens**.

---

### Why a Custom Component?

The out-of-the-box **Operator** field in Pega only shows a single operator at a time. This custom component goes further by:

- **Showing only a few columns by default** — keeping the case view clean and uncluttered.
- **Fetching additional details on demand** — the modal loads richer operator data when the user explicitly requests it, avoiding unnecessary data loading.
- **Displaying extra data for a row** — the detail modal surfaces avatar, full name, user ID, and formatted timestamp in a structured layout.
- **Supporting multiple audit events in one component** — created, updated, and resolved events are shown side-by-side in a single table.

---

### Props

| Prop | Type | Description |
|---|---|---|
| \`createLabel\` | \`string\` | Label for the creation event row (default: \`"Created"\`) |
| \`updateLabel\` | \`string\` | Label for the last-update event row (default: \`"Updated"\`) |
| \`resolveLabel\` | \`string\` | Label for the resolution event row (default: \`"Resolved"\`) |
| \`createOperator\` | \`{ userId, userName }\` | Operator who created the record |
| \`updateOperator\` | \`{ userId, userName }\` | Operator who last updated the record |
| \`resolveOperator\` | \`{ userId, userName }\` | Operator who resolved the record (optional) |
| \`createDateTime\` | \`string\` | ISO 8601 timestamp for creation |
| \`updateDateTime\` | \`string\` | ISO 8601 timestamp for last update |
| \`resolveDateTime\` | \`string\` | ISO 8601 timestamp for resolution (optional) |

> **Note:** Rows with an empty \`userId\` are automatically hidden from the table.
        `
      }
    }
  },
  argTypes: {
    createLabel: {
      description: 'Label displayed in the **Action** column for the creation event row.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Created' }
      }
    },
    updateLabel: {
      description: 'Label displayed in the **Action** column for the last-update event row.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Updated' }
      }
    },
    resolveLabel: {
      description:
        'Label displayed in the **Action** column for the resolution event row. The row is hidden when no `resolveOperator.userId` is provided.',
      control: 'text',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'Resolved' }
      }
    },
    createOperator: {
      description:
        'Operator object for the creation event. Must include `userId` (login) and `userName` (display name). Row is hidden when `userId` is empty.',
      control: 'object',
      table: {
        type: { summary: '{ userId: string; userName: string }' }
      }
    },
    updateOperator: {
      description:
        'Operator object for the last-update event. Row is hidden when `userId` is empty.',
      control: 'object',
      table: {
        type: { summary: '{ userId: string; userName: string }' }
      }
    },
    resolveOperator: {
      description:
        'Operator object for the resolution event. Row is hidden when `userId` is empty or the prop is omitted.',
      control: 'object',
      table: {
        type: { summary: '{ userId: string; userName: string }' }
      }
    },
    createDateTime: {
      description:
        'ISO 8601 timestamp for when the record was created. Rendered using the Cosmos `DateTimeDisplay` component.',
      control: 'text',
      table: {
        type: { summary: 'string (ISO 8601)' }
      }
    },
    updateDateTime: {
      description: 'ISO 8601 timestamp for the most recent update to the record.',
      control: 'text',
      table: {
        type: { summary: 'string (ISO 8601)' }
      }
    },
    resolveDateTime: {
      description: 'ISO 8601 timestamp for when the record was resolved.',
      control: 'text',
      table: {
        type: { summary: 'string (ISO 8601)' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof PegaFieldAdditionalDetails>;

const defaultArgs = {
  createLabel: configProps.createLabel,
  updateLabel: configProps.updateLabel,
  createOperator: configProps.createOperator,
  updateOperator: configProps.updateOperator,
  createDateTime: configProps.createDateTime,
  updateDateTime: configProps.updateDateTime,
  getPConnect: () =>
    ({
      getActionsApi: () => ({
        updateFieldValue: () => {},
        triggerFieldChange: () => {}
      }),
      ignoreSuggestion: () => {},
      acceptSuggestion: () => {},
      setInheritedProps: () => {},
      resolveConfigProps: () => {}
    }) as any
};

export const Default: Story = {
  name: 'Default — Created & Updated',
  args: defaultArgs,
  parameters: {
    docs: {
      description: {
        story:
          'Shows the standard two-row audit table with a **Created** and an **Updated** event. Click the **Details** button on either row to open the operator detail modal.'
      },
      source: {
        code: `
<PegaFieldAdditionalDetails
  createLabel="Created"
  updateLabel="Updated"
  createOperator={{ userId: 'admin@mediaco', userName: 'admin' }}
  updateOperator={{ userId: 'admin@mediaco', userName: 'admin' }}
  createDateTime="2023-01-16T14:53:33.198Z"
  updateDateTime="2023-01-16T14:53:33.280Z"
/>
        `
      }
    }
  }
};

export const WithResolvedOperator: Story = {
  name: 'With Resolved Operator',
  args: {
    ...defaultArgs,
    resolveLabel: 'Resolved',
    resolveOperator: { userId: 'manager@mediaco', userName: 'manager' },
    resolveDateTime: '2023-01-20T09:00:00.000Z'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Demonstrates all three audit rows — **Created**, **Updated**, and **Resolved** — visible simultaneously. A non-empty `resolveOperator.userId` is required for the resolved row to appear.'
      },
      source: {
        code: `
<PegaFieldAdditionalDetails
  createLabel="Created"
  updateLabel="Updated"
  resolveLabel="Resolved"
  createOperator={{ userId: 'admin@mediaco', userName: 'admin' }}
  updateOperator={{ userId: 'admin@mediaco', userName: 'admin' }}
  resolveOperator={{ userId: 'manager@mediaco', userName: 'manager' }}
  createDateTime="2023-01-16T14:53:33.198Z"
  updateDateTime="2023-01-16T14:53:33.280Z"
  resolveDateTime="2023-01-20T09:00:00.000Z"
/>
        `
      }
    }
  }
};

export const CreateOnly: Story = {
  name: 'Create Only',
  args: {
    ...defaultArgs,
    updateOperator: { userId: '', userName: '' }
  },
  parameters: {
    docs: {
      description: {
        story:
          'When `updateOperator.userId` is empty, the **Updated** row is automatically hidden. This is useful for newly created records that have not yet been modified.'
      },
      source: {
        code: `
<PegaFieldAdditionalDetails
  createLabel="Created"
  updateLabel="Updated"
  createOperator={{ userId: 'admin@mediaco', userName: 'admin' }}
  updateOperator={{ userId: '', userName: '' }}
  createDateTime="2023-01-16T14:53:33.198Z"
  updateDateTime="2023-01-16T14:53:33.280Z"
/>
        `
      }
    }
  }
};
