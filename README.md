# Controls Library Angular

A comprehensive Angular component library built on Angular Material with custom design tokens and modern styling. This library provides reusable UI components that follow design system principles and accessibility best practices.

## 🚀 Features

- **Angular 19** - Built with the latest Angular version
- **Angular Material Integration** - Extends Material Design components
- **Design Tokens** - Consistent theming with CSS variables and SCSS
- **Storybook Documentation** - Interactive component playground
- **TypeScript** - Full type safety and IntelliSense support
- **Accessibility** - WCAG compliant components
- **Responsive Design** - Mobile-first approach

## 📦 Components

### Currently Available
- **Button** - Various styles, sizes, and states
- **Input** - Form inputs with validation and error states

### Coming Soon
- Select
- Checkbox
- Radio
- Card
- Modal
- Table

## 🛠️ Installation

```bash
npm install @your-org/controls-library-angular
```

## 🎯 Quick Start

### 1. Import the Module

```typescript
import { NgModule } from '@angular/core';
import { ControlsModule } from '@your-org/controls-library-angular';

@NgModule({
  imports: [ControlsModule],
  // ...
})
export class AppModule { }
```

### 2. Use Components

```html
<!-- Button -->
<ctrl-button variant="primary" size="md" (clicked)="onClick($event)">
  Click me
</ctrl-button>

<!-- Input -->
<ctrl-input 
  label="Email" 
  type="email" 
  placeholder="Enter your email"
  hint="We'll never share your email"
  [required]="true">
</ctrl-input>
```

### 3. Import Styles

```scss
// In your global styles.scss
@import '@your-org/controls-library-angular/styles';
```

## 🎨 Design Tokens

The library uses design tokens for consistent theming:

```scss
// Colors
--ctrl-theme-primary: #2196f3;
--ctrl-theme-secondary: #9c27b0;
--ctrl-theme-error: #f44336;

// Spacing
--ctrl-spacing-xs: 4px;
--ctrl-spacing-sm: 8px;
--ctrl-spacing-md: 16px;

// Typography
--ctrl-font-family: 'Inter', 'Roboto', sans-serif;
--ctrl-font-size-base: 16px;
```

## 📚 Documentation

### Storybook
Visit our interactive documentation: [https://promosz.github.io/ControlsLibraryAngular/](https://promosz.github.io/ControlsLibraryAngular/)

### Component API

#### Button Component

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'text'` | `'primary'` | Visual style variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the button |
| `disabled` | `boolean` | `false` | Whether the button is disabled |
| `loading` | `boolean` | `false` | Whether the button is in loading state |
| `fullWidth` | `boolean` | `false` | Whether the button should take full width |
| `type` | `'button' \| 'submit' \| 'reset'` | `'button'` | HTML button type |

#### Input Component

| Property | Type | Default | Description |
|----------|------|---------|-------------|
| `label` | `string` | `''` | Label text for the input field |
| `placeholder` | `string` | `''` | Placeholder text |
| `hint` | `string` | `''` | Helper text shown below the input |
| `error` | `string` | `''` | Error message to display |
| `disabled` | `boolean` | `false` | Whether the input is disabled |
| `required` | `boolean` | `false` | Whether the input is required |
| `type` | `'text' \| 'email' \| 'password' \| 'number' \| 'tel' \| 'url'` | `'text'` | Input type |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Size of the input field |

## 🎨 Figma Integration

### Design Token Export

1. **Install Figma Tokens Plugin**
   - Go to [Figma Tokens](https://www.figma.com/community/plugin/843461159747178946/Figma-Tokens)
   - Install the plugin in your Figma file

2. **Create Design Tokens**
   ```
   Colors/
   ├── Primary (50-900)
   ├── Secondary (50-900)
   ├── Neutral (50-900)
   ├── Error, Warning, Success
   
   Typography/
   ├── Font Families
   ├── Font Sizes
   ├── Font Weights
   ├── Line Heights
   
   Spacing/
   ├── xs: 4px
   ├── sm: 8px
   ├── md: 16px
   ├── lg: 24px
   ├── xl: 32px
   
   Border Radius/
   ├── sm: 4px
   ├── md: 8px
   ├── lg: 12px
   ├── full: 9999px
   
   Shadows/
   ├── sm, md, lg, xl
   ```

3. **Export Tokens**
   - Use Figma Tokens plugin to export to JSON
   - Place the exported file in `design-tokens/tokens.json`
   - Run `npm run build:tokens` to generate SCSS/CSS variables

### Component Design Guidelines

1. **Create Components as Figma Components** (not frames)
2. **Use Variants** for different states (default, hover, active, disabled, focus)
3. **Apply Auto Layout** for responsiveness
4. **Name layers consistently**: `ComponentName/Variant/State`
5. **Document usage** in a separate Documentation page

## 🚀 Development

### Prerequisites
- Node.js 18+ 
- Angular CLI 19+
- npm

### Setup

```bash
# Clone the repository
git clone https://github.com/promosz/ControlsLibraryAngular.git
cd ControlsLibraryAngular

# Install dependencies
npm install --legacy-peer-deps

# Build design tokens
npm run build:tokens

# Start development server
npm start

# Start Storybook
npm run storybook
```

### Building

```bash
# Build the library
npm run build:lib

# Build Storybook for production
npm run build-storybook
```

### Testing

```bash
# Run unit tests
npm test

# Run Storybook tests
npm run test-storybook
```

## 📁 Project Structure

```
ControlsLibraryAngular/
├── projects/
│   └── controls/                 # Main library
│       ├── src/
│       │   ├── lib/
│       │   │   ├── button/       # Button component
│       │   │   ├── input/        # Input component
│       │   │   └── styles/       # Global styles and tokens
│       │   └── public-api.ts     # Public API exports
├── .storybook/                   # Storybook configuration
├── design-tokens/               # Design token management
├── .github/workflows/          # CI/CD workflows
└── README.md
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Development Guidelines

- Follow Angular style guide
- Write unit tests for new components
- Update Storybook stories
- Ensure accessibility compliance
- Update documentation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🔗 Links

- [Storybook Documentation](https://promosz.github.io/ControlsLibraryAngular/)
- [GitHub Repository](https://github.com/promosz/ControlsLibraryAngular)
- [Angular Material](https://material.angular.io/)
- [Storybook](https://storybook.js.org/)

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Check the Storybook documentation
- Review the component examples

---

Made with ❤️ using Angular and Storybook