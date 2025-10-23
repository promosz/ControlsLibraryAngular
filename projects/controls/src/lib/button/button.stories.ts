import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';

const meta: Meta<ButtonComponent> = {
  title: 'Components/Button',
  component: ButtonComponent,
  parameters: {
    docs: {
      description: {
        component: 'Button is used to initiate actions on a page or form. Use buttons to allow users to take actions, make choices, with a single tap.'
      }
    }
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'outline', 'text'],
      description: 'Visual style variant of the button'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the button'
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
      imports: [FormsModule]
    })
  ],
  tags: ['autodocs']
};

export default meta;
type Story = StoryObj<ButtonComponent>;

// Default story
export const Default: Story = {
  args: {
    variant: 'primary',
    size: 'md',
    disabled: false,
    loading: false,
    fullWidth: false
  },
  render: (args) => ({
    props: args,
    template: '<ctrl-button [variant]="variant" [size]="size" [disabled]="disabled" [loading]="loading" [fullWidth]="fullWidth" (clicked)="onClick($event)">Click me</ctrl-button>'
  })
};

// Variants
export const Variants: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <ctrl-button variant="primary">Primary</ctrl-button>
        <ctrl-button variant="secondary">Secondary</ctrl-button>
        <ctrl-button variant="outline">Outline</ctrl-button>
        <ctrl-button variant="text">Text</ctrl-button>
      </div>
    `
  })
};

// Sizes
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; align-items: center;">
        <ctrl-button size="sm">Small</ctrl-button>
        <ctrl-button size="md">Medium</ctrl-button>
        <ctrl-button size="lg">Large</ctrl-button>
      </div>
    `
  })
};

// States
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <ctrl-button>Default</ctrl-button>
        <ctrl-button [disabled]="true">Disabled</ctrl-button>
        <ctrl-button [loading]="true">Loading</ctrl-button>
        <ctrl-button [fullWidth]="true">Full Width</ctrl-button>
      </div>
    `
  })
};

// With Icons
export const WithIcons: Story = {
  render: () => ({
    template: `
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <ctrl-button>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          Star
        </ctrl-button>
        <ctrl-button variant="outline">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
            <polyline points="7,10 12,15 17,10"/>
            <line x1="12" y1="15" x2="12" y2="3"/>
          </svg>
          Download
        </ctrl-button>
      </div>
    `
  })
};

// Interactive Playground
export const Playground: Story = {
  args: {
    variant: 'primary',
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
