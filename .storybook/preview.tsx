import type { Preview } from '@storybook/react-vite'
import '../src/index.css'
import { injectTokens } from '../src/tokens'

injectTokens()

const preview: Preview = {
  tags: ['autodocs'],

  globalTypes: {
    theme: {
      description: 'Tema dos tokens de cor',
      toolbar: {
        title: 'Tema',
        icon: 'circlehollow',
        items: [
          { value: 'system', title: 'Sistema' },
          { value: 'light', title: 'Claro' },
          { value: 'dark', title: 'Escuro' },
        ],
        dynamicTitle: true,
      },
    },
  },

  initialGlobals: {
    theme: 'light',
  },

  decorators: [
    (Story, context) => {
      const theme = context.globals.theme as string
      if (theme === 'system') delete document.documentElement.dataset.theme
      else document.documentElement.dataset.theme = theme
      return (
        <div
          style={{
            background: 'var(--color-surface)',
            color: 'var(--color-text)',
            padding: 'var(--space-5)',
          }}
        >
          <Story />
        </div>
      )
    },
  ],

  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    }
  },
};

export default preview;
