import type { Meta, StoryObj } from '@storybook/react-vite';
import { expect } from 'storybook/test';
import App from './App';

const meta = {
  component: App,
  tags: ['ai-generated'],
  parameters: { layout: 'fullscreen' },
} satisfies Meta<typeof App>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  play: async ({ canvas, userEvent }) => {
    const counter = canvas.getByRole('button', { name: /count is 0/i });
    await userEvent.click(counter);
    await userEvent.click(counter);
    await expect(canvas.getByRole('button', { name: /count is 2/i })).toBeVisible();
  },
};

export const CssCheck: Story = {
  play: async ({ canvas }) => {
    const counter = canvas.getByRole('button', { name: /count is/i });
    const style = getComputedStyle(counter);
    // `.counter` usa font-family: var(--mono) (index.css) e border-radius: 5px (App.css).
    await expect(style.fontFamily).toContain('monospace');
    await expect(style.borderRadius).toBe('5px');
  },
};
