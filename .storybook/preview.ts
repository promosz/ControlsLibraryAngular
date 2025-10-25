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
  background: #f5f5f5;
  color: #6200ee;
}

.mat-mdc-raised-button {
  background: #6200ee;
  color: white;
  box-shadow: 0px 3px 1px -2px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 1px 5px 0px rgba(0,0,0,0.12);
}

.mat-mdc-stroked-button {
  background: #f5f5f5;
  color: #8d6e63;
  border: 2px solid #8d6e63;
}

.mat-mdc-flat-button {
  background: #f5f5f5;
  color: #6200ee;
}

.mat-mdc-button:hover, .mat-mdc-raised-button:hover, .mat-mdc-stroked-button:hover, .mat-mdc-flat-button:hover {
  opacity: 0.8;
}

.mat-mdc-button:disabled, .mat-mdc-raised-button:disabled, .mat-mdc-stroked-button:disabled, .mat-mdc-flat-button:disabled {
  opacity: 0.4;
  cursor: not-allowed;
}

/* Primary color variants */
.mat-mdc-button.mat-primary {
  background: #e3f2fd;
  color: #2196f3;
}

.mat-mdc-raised-button.mat-primary {
  background: #2196f3;
  color: white;
}

.mat-mdc-stroked-button.mat-primary {
  background: #e3f2fd;
  color: #8d6e63;
  border-color: #8d6e63;
}

.mat-mdc-flat-button.mat-primary {
  background: #e3f2fd;
  color: #2196f3;
}

/* Accent color variants */
.mat-mdc-button.mat-accent {
  background: #f3e5f5;
  color: #9c27b0;
}

.mat-mdc-raised-button.mat-accent {
  background: #9c27b0;
  color: white;
}

.mat-mdc-stroked-button.mat-accent {
  background: #f3e5f5;
  color: #8d6e63;
  border-color: #8d6e63;
}

.mat-mdc-flat-button.mat-accent {
  background: #f3e5f5;
  color: #9c27b0;
}

/* Warn color variants */
.mat-mdc-button.mat-warn {
  background: #ffebee;
  color: #f44336;
}

.mat-mdc-raised-button.mat-warn {
  background: #f44336;
  color: white;
}

.mat-mdc-stroked-button.mat-warn {
  background: #ffebee;
  color: #8d6e63;
  border-color: #8d6e63;
}

.mat-mdc-flat-button.mat-warn {
  background: #ffebee;
  color: #f44336;
}

:root {
  /* Primary colors */
  --color-primary-50: #e3f2fd;
  --color-primary-100: #bbdefb;
  --color-primary-200: #90caf9;
  --color-primary-300: #64b5f6;
  --color-primary-400: #42a5f5;
  --color-primary-500: #2196f3;
  --color-primary-600: #1e88e5;
  --color-primary-700: #1976d2;
  --color-primary-800: #1565c0;
  --color-primary-900: #0d47a1;

  /* Secondary/Accent colors */
  --color-secondary-50: #f3e5f5;
  --color-secondary-100: #e1bee7;
  --color-secondary-200: #ce93d8;
  --color-secondary-300: #ba68c8;
  --color-secondary-400: #ab47bc;
  --color-secondary-500: #9c27b0;
  --color-secondary-600: #8e24aa;
  --color-secondary-700: #7b1fa2;
  --color-secondary-800: #6a1b9a;
  --color-secondary-900: #4a148c;

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
  --mdc-theme-primary: #2196f3;
  --mdc-theme-on-primary: #ffffff;
  --mdc-theme-secondary: #9c27b0;
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
