import { render, screen } from '@testing-library/react';
import { composeStories } from '@storybook/react';
import '@testing-library/jest-dom';

import * as DemoStories from './demo.stories';

const { Default, Autoplay, Loop } = composeStories(DemoStories);

test('renders video player with default props', async () => {
  render(<Default />);
  const video = await screen.findByRole('img', { hidden: true }) ?? document.querySelector('video');
  // The video element should be in the document
  expect(document.querySelector('video')).toBeInTheDocument();
});

test('renders video player in autoplay story', async () => {
  render(<Autoplay />);
  expect(document.querySelector('video')).toBeInTheDocument();
});

test('renders video player with loop enabled', async () => {
  render(<Loop />);
  const video = document.querySelector('video');
  expect(video).toBeInTheDocument();
  expect(video).toHaveAttribute('loop');
});
