import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: 'Button component following Angular Material v19 design specification. Supports Basic, Raised, Stroked, and Flat variants with Primary, Accent, and Warn colors.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['basic', 'raised', 'stroked', 'flat'],
      description: 'Material Design button variant'
    },
    color: {
      control: { type: 'select' },
      options: ['primary', 'accent', 'warn'],
      description: 'Material Design color theme'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Button size'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the button is disabled'
    },
    loading: {
      control: { type: 'boolean' },
      description: 'Whether the button is in loading state'
    },
    fullWidth: {
      control: { type: 'boolean' },
      description: 'Whether the button should take full width'
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type'
    }
  },
  decorators: [
    moduleMetadata({
      imports: [FormsModule, MatButtonModule, MatProgressSpinnerModule]
    })
  ],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Default story
export const Default: Story = {
  args: {
    variant: 'basic',
    color: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false
  },
  render: (args) => ({
    props: args,
    template: '<ctrl-button [variant]="variant" [color]="color" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth" (clicked)="onClick($event)">Click me</ctrl-button>'
  })
};

// Material Design Variants
export const MaterialVariants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ctrl-button variant="basic" color="primary">Basic</ctrl-button>
        <ctrl-button variant="raised" color="primary">Raised</ctrl-button>
        <ctrl-button variant="stroked" color="primary">Stroked</ctrl-button>
        <ctrl-button variant="flat" color="primary">Flat</ctrl-button>
      </div>
    `
  })
};

// Material Design Colors
export const MaterialColors: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ctrl-button variant="raised" color="primary">Primary</ctrl-button>
        <ctrl-button variant="raised" color="accent">Accent</ctrl-button>
        <ctrl-button variant="raised" color="warn">Warn</ctrl-button>
      </div>
    `
  })
};

// All Variants and Colors
export const AllCombinations: Story = {
  render: () => ({
    template: `
      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px;">
        <div style="text-align: center;">
          <h4>Basic</h4>
          <ctrl-button variant="basic" color="primary">Primary</ctrl-button>
          <ctrl-button variant="basic" color="accent">Accent</ctrl-button>
          <ctrl-button variant="basic" color="warn">Warn</ctrl-button>
        </div>
        <div style="text-align: center;">
          <h4>Raised</h4>
          <ctrl-button variant="raised" color="primary">Primary</ctrl-button>
          <ctrl-button variant="raised" color="accent">Accent</ctrl-button>
          <ctrl-button variant="raised" color="warn">Warn</ctrl-button>
        </div>
        <div style="text-align: center;">
          <h4>Stroked</h4>
          <ctrl-button variant="stroked" color="primary">Primary</ctrl-button>
          <ctrl-button variant="stroked" color="accent">Accent</ctrl-button>
          <ctrl-button variant="stroked" color="warn">Warn</ctrl-button>
        </div>
        <div style="text-align: center;">
          <h4>Flat</h4>
          <ctrl-button variant="flat" color="primary">Primary</ctrl-button>
          <ctrl-button variant="flat" color="accent">Accent</ctrl-button>
          <ctrl-button variant="flat" color="warn">Warn</ctrl-button>
        </div>
      </div>
    `
  })
};

// Sizes
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <ctrl-button size="sm" variant="raised" color="primary">Small</ctrl-button>
        <ctrl-button size="md" variant="raised" color="primary">Medium</ctrl-button>
        <ctrl-button size="lg" variant="raised" color="primary">Large</ctrl-button>
      </div>
    `
  })
};

// States
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
        <ctrl-button variant="raised" color="primary">Default</ctrl-button>
        <ctrl-button variant="raised" color="primary" [disabled]="true">Disabled</ctrl-button>
        <ctrl-button variant="raised" color="primary" [loading]="true">Loading</ctrl-button>
        <ctrl-button variant="raised" color="primary" [fullWidth]="true">Full Width</ctrl-button>
      </div>
    `
  })
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'basic',
    color: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false,
    type: 'button'
  },
  render: (args) => ({
    props: {
      ...args,
      onClick: (event: Event) => {
        console.log('Button clicked!', event);
        alert('Button clicked!');
      }
    },
    template: `
      <div style="padding: 20px;">
        <ctrl-button 
          [variant]="variant" 
          [color]="color"
          [size]="size" 
          [disabled]="disabled" 
          [loading]="loading" 
          [fullWidth]="fullWidth"
          [type]="type"
          (clicked)="onClick($event)">
          {{ loading ? 'Loading...' : 'Click me' }}
        </ctrl-button>
      </div>
    `
  })
};

