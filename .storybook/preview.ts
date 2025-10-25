import type { Preview } from '@storybook/angular';

// Add CSS variables directly
const cssVariables = `
/* Angular Material Base Styles */
.mat-mdc-button, .mat-mdc-raised-button, .mat-mdc-stroked-button, .mat-mdc-flat-button {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.0892857143em;
  text-transform: uppercase;
  border-radius: 4px;
  min-width: 64px;
  padding: 0 16px;
  height: 36px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease;
}

.mat-mdc-button {
  background: transparent;
  color: #6200ee;
}

.mat-mdc-raised-button {
  background: #6200ee;
  color: white;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}

.mat-mdc-stroked-button {
  background: #f5f5f5;
  color: #6200ee;
  border: 1px solid #6200ee;
}

.mat-mdc-flat-button {
  background: #f5f5f5;
  color: #6200ee;
}

.mat-mdc-button:hover {
  opacity: 0.85; /* dla Basic transparent buttons */
}

.mat-mdc-raised-button:hover, 
.mat-mdc-stroked-button:hover, 
.mat-mdc-flat-button:hover {
  filter: brightness(95%);
}

.mat-mdc-button:disabled, .mat-mdc-raised-button:disabled, .mat-mdc-stroked-button:disabled, .mat-mdc-flat-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Primary color variants */
.mat-mdc-button.mat-primary {
  background: transparent;
  color: #00796B;
}

.mat-mdc-raised-button.mat-primary {
  background: #00796B;
  color: white;
}

.mat-mdc-stroked-button.mat-primary {
  background: #E0F2F1;
  color: #00796B;
  border-color: #00796B;
}

.mat-mdc-flat-button.mat-primary {
  background: #E0F2F1;
  color: #00796B;
}

/* Accent color variants */
.mat-mdc-button.mat-accent {
  background: transparent;
  color: #2196F3;
}

.mat-mdc-raised-button.mat-accent {
  background: #2196F3;
  color: white;
}

.mat-mdc-stroked-button.mat-accent {
  background: #E3F2FD;
  color: #2196F3;
  border-color: #2196F3;
}

.mat-mdc-flat-button.mat-accent {
  background: #E3F2FD;
  color: #2196F3;
}

/* Warn color variants */
.mat-mdc-button.mat-warn {
  background: transparent;
  color: #f44336;
}

.mat-mdc-raised-button.mat-warn {
  background: #f44336;
  color: white;
}

.mat-mdc-stroked-button.mat-warn {
  background: #ffebee;
  color: #f44336;
  border-color: #f44336;
}

.mat-mdc-flat-button.mat-warn {
  background: #ffebee;
  color: #f44336;
}

:root {
  /* Primary colors (Teal) */
  --color-primary-50: #E0F2F1;
  --color-primary-100: #B2DFDB;
  --color-primary-200: #80CBC4;
  --color-primary-300: #4DB6AC;
  --color-primary-400: #26A69A;
  --color-primary-500: #00796B;
  --color-primary-600: #00695C;
  --color-primary-700: #004D40;
  --color-primary-800: #003D32;
  --color-primary-900: #002D24;

  /* Secondary/Accent colors (Blue) */
  --color-secondary-50: #E3F2FD;
  --color-secondary-100: #BBDEFB;
  --color-secondary-200: #90CAF9;
  --color-secondary-300: #64B5F6;
  --color-secondary-400: #42A5F5;
  --color-secondary-500: #2196F3;
  --color-secondary-600: #1E88E5;
  --color-secondary-700: #1976D2;
  --color-secondary-800: #1565C0;
  --color-secondary-900: #0D47A1;

  /* Error/Warn colors */
  --color-error-50: #ffebee;
  --color-error-500: #f44336;
  --color-error-700: #d32f2f;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-sm: 8px;
  --spacing-md: 16px;
  --spacing-lg: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;
  --spacing-xxxl: 64px;

  /* Typography */
  --font-family-primary: 'Inter', 'Roboto', sans-serif;
  --font-family-mono: 'JetBrains Mono', 'Consolas', monospace;
  --font-size-xs: 12px;
  --font-size-sm: 14px;
  --font-size-md: 16px;
  --font-size-lg: 18px;
  --font-size-xl: 20px;
  --font-size-xxl: 24px;
  --font-size-xxxl: 32px;
  --font-weight-light: 300;
  --font-weight-regular: 400;
  --font-weight-medium: 500;
  --font-weight-semibold: 600;
  --font-weight-bold: 700;
  --line-height-tight: 1.2;
  --line-height-normal: 1.5;
  --line-height-relaxed: 1.75;

  /* Border radius */
  --border-radius-none: 0;
  --border-radius-sm: 4px;
  --border-radius-md: 8px;
  --border-radius-lg: 12px;
  --border-radius-full: 9999px;

  /* Box shadows */
  --box-shadow-sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  --box-shadow-md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  /* Material Design Theme Variables */
  --mdc-theme-primary: #00796B;
  --mdc-theme-on-primary: #ffffff;
  --mdc-theme-secondary: #2196F3;
  --mdc-theme-on-secondary: #ffffff;
  --mdc-theme-error: #f44336;
  --mdc-theme-on-error: #ffffff;
}
`;

// Inject CSS variables
const style = document.createElement('style');
style.textContent = cssVariables;
document.head.appendChild(style);

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#333333',
        },
      ],
    },
    viewport: {
      viewports: {
        mobile: {
          name: 'Mobile',
          styles: {
            width: '375px',
            height: '667px',
          },
        },
        tablet: {
          name: 'Tablet',
          styles: {
            width: '768px',
            height: '1024px',
          },
        },
        desktop: {
          name: 'Desktop',
          styles: {
            width: '1024px',
            height: '768px',
          },
        },
      },
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },
};

export default preview;
