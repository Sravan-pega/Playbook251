// import { expect, test } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

import * as DemoStories from './demo.stories';

const { Default } = composeStories(DemoStories);

test('renders PegaFieldCreditcard', async () => {
  render(<Default />);
  expect(await screen.findByText('Credit Card Number')).toBeVisible();

  const textElement = (screen.getByTestId('credit-card-default:input:control') as HTMLInputElement);
  expect(textElement.value).toBe('');

  expect(textElement).toHaveAttribute('placeholder', 'Enter credit card number');
});
