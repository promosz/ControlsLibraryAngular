# Figma Setup Instructions for Controls Library Angular

## Overview
This document provides step-by-step instructions for setting up your Figma project to work seamlessly with the Angular Controls Library.

## 1. Install Required Plugins

### Figma Tokens Plugin
1. Open Figma and go to **Plugins** → **Browse all plugins**
2. Search for "Figma Tokens"
3. Install the plugin by [Jan Six](https://www.figma.com/community/plugin/843461159747178946/Figma-Tokens)

## 2. Create Design Token Structure

### Page 1: Design Tokens
Create a dedicated page called "Design Tokens" with the following structure:

#### Colors
```
Colors/
├── Primary/
│   ├── 50: #e3f2fd
│   ├── 100: #bbdefb
│   ├── 200: #90caf9
│   ├── 300: #64b5f6
│   ├── 400: #42a5f5
│   ├── 500: #2196f3 (Main)
│   ├── 600: #1e88e5
│   ├── 700: #1976d2
│   ├── 800: #1565c0
│   └── 900: #0d47a1
├── Secondary/
│   ├── 50: #f3e5f5
│   ├── 100: #e1bee7
│   ├── 200: #ce93d8
│   ├── 300: #ba68c8
│   ├── 400: #ab47bc
│   ├── 500: #9c27b0 (Main)
│   ├── 600: #8e24aa
│   ├── 700: #7b1fa2
│   ├── 800: #6a1b9a
│   └── 900: #4a148c
├── Neutral/
│   ├── 50: #fafafa
│   ├── 100: #f5f5f5
│   ├── 200: #eeeeee
│   ├── 300: #e0e0e0
│   ├── 400: #bdbdbd
│   ├── 500: #9e9e9e
│   ├── 600: #757575
│   ├── 700: #616161
│   ├── 800: #424242
│   └── 900: #212121
├── Error: #f44336
├── Warning: #ff9800
└── Success: #4caf50
```

#### Typography
```
Typography/
├── Font Families/
│   ├── Primary: Inter, Roboto, sans-serif
│   └── Mono: JetBrains Mono, Consolas, monospace
├── Font Sizes/
│   ├── xs: 12px
│   ├── sm: 14px
│   ├── md: 16px
│   ├── lg: 18px
│   ├── xl: 20px
│   ├── xxl: 24px
│   └── xxxl: 32px
├── Font Weights/
│   ├── light: 300
│   ├── regular: 400
│   ├── medium: 500
│   ├── semibold: 600
│   └── bold: 700
└── Line Heights/
    ├── tight: 1.2
    ├── normal: 1.5
    └── relaxed: 1.75
```

#### Spacing
```
Spacing/
├── xs: 4px
├── sm: 8px
├── md: 16px
├── lg: 24px
├── xl: 32px
├── xxl: 48px
└── xxxl: 64px
```

#### Border Radius
```
Border Radius/
├── none: 0px
├── sm: 4px
├── md: 8px
├── lg: 12px
└── full: 9999px
```

#### Shadows
```
Shadows/
├── sm: 0 1px 2px 0 rgba(0, 0, 0, 0.05)
├── md: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)
├── lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)
└── xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)
```

## 3. Create Component Library

### Page 2: Components
Create components as **Figma Components** (not frames) with the following structure:

#### Button Component
```
Button/
├── Variants/
│   ├── Primary/
│   │   ├── Default
│   │   ├── Hover
│   │   ├── Active
│   │   ├── Disabled
│   │   └── Loading
│   ├── Secondary/
│   │   ├── Default
│   │   ├── Hover
│   │   ├── Active
│   │   ├── Disabled
│   │   └── Loading
│   ├── Outline/
│   │   ├── Default
│   │   ├── Hover
│   │   ├── Active
│   │   ├── Disabled
│   │   └── Loading
│   └── Text/
│       ├── Default
│       ├── Hover
│       ├── Active
│       ├── Disabled
│       └── Loading
└── Sizes/
    ├── Small (32px height)
    ├── Medium (40px height)
    └── Large (48px height)
```

#### Input Component
```
Input/
├── States/
│   ├── Default
│   ├── Focus
│   ├── Error
│   ├── Disabled
│   └── With Value
├── Sizes/
│   ├── Small (32px height)
│   ├── Medium (40px height)
│   └── Large (48px height)
└── Variants/
    ├── With Label
    ├── With Hint
    ├── With Error Message
    └── Required Field
```

## 4. Component Design Guidelines

### Best Practices
1. **Use Auto Layout** for all components to ensure responsiveness
2. **Create Variants** for different states (default, hover, active, disabled, focus)
3. **Name layers consistently**: `ComponentName/Variant/State`
4. **Use design tokens** for colors, spacing, and typography
5. **Follow 8px grid system** for consistent spacing

### Component Specifications

#### Button Specifications
- **Padding**: Use spacing tokens (xs, sm, md, lg)
- **Border Radius**: Use border radius tokens (sm, md, lg)
- **Typography**: Use font weight medium (500) for button text
- **States**: Include hover, active, disabled, and loading states
- **Accessibility**: Ensure 44px minimum touch target

#### Input Specifications
- **Border**: 1px solid using neutral-300 color
- **Focus State**: Primary color border with subtle shadow
- **Error State**: Error color border and text
- **Label**: Small text, medium weight
- **Hint Text**: Extra small text, neutral-500 color
- **Error Text**: Extra small text, error color

## 5. Export Design Tokens

### Using Figma Tokens Plugin
1. Open the Figma Tokens plugin
2. Go to **Tokens** tab
3. Create tokens for each design token category
4. Export as JSON format
5. Save the file as `design-tokens/tokens.json` in your project

### Manual Export (Alternative)
If you prefer manual export:
1. Create a JSON file with the structure from `design-tokens/tokens.json`
2. Update values to match your Figma design
3. Run `npm run build:tokens` to generate SCSS/CSS variables

## 6. Documentation Page

### Page 3: Documentation
Create a documentation page with:
- **Component Usage Examples**
- **Do's and Don'ts**
- **Accessibility Guidelines**
- **Responsive Behavior**
- **Integration Notes**

## 7. Integration Workflow

### Regular Updates
1. **Design Changes**: Update components in Figma
2. **Export Tokens**: Update `design-tokens/tokens.json`
3. **Build Tokens**: Run `npm run build:tokens`
4. **Update Components**: Modify Angular components if needed
5. **Update Stories**: Update Storybook stories
6. **Test**: Run Storybook to verify changes

### Version Control
- Keep Figma file in sync with code repository
- Document breaking changes in design tokens
- Maintain changelog for design system updates

## 8. Collaboration Tips

### For Designers
- Always use design tokens for consistency
- Test components in different states
- Consider accessibility requirements
- Document component behavior and usage

### For Developers
- Follow the established naming conventions
- Use the generated design tokens
- Implement all component states
- Write comprehensive Storybook stories

## 9. Troubleshooting

### Common Issues
1. **Token Export Issues**: Ensure Figma Tokens plugin is properly configured
2. **Component Sync**: Verify layer naming matches conventions
3. **Spacing Issues**: Use 8px grid system consistently
4. **Color Variations**: Stick to defined color palette

### Getting Help
- Check Storybook documentation
- Review component examples
- Consult Angular Material guidelines
- Test accessibility with screen readers

---

This setup ensures seamless integration between your Figma design system and the Angular Controls Library, maintaining consistency and enabling efficient collaboration between designers and developers.
