import type { Meta, StoryObj } from '@storybook/angular';
import { InputComponent } from './input.component';
import { moduleMetadata } from '@storybook/angular';
import { FormsModule } from '@angular/forms';

const meta: Meta<InputComponent> = {
  title: 'Components/Input',
  component: InputComponent,
  parameters: {
    docs: {
      description: {
        component: 'Input fields allow users to enter text, numbers, and other data. They provide a way to collect information from users in forms.'
      }
    }
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Label text for the input field'
    },
    placeholder: {
      control: { type: 'text' },
      description: 'Placeholder text shown when input is empty'
    },
    hint: {
      control: { type: 'text' },
      description: 'Helper text shown below the input'
    },
    error: {
      control: { type: 'text' },
      description: 'Error message to display'
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Whether the input is disabled'
    },
    required: {
      control: { type: 'boolean' },
      description: 'Whether the input is required'
    },
    type: {
      control: { type: 'select' },
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
      description: 'Input type'
    },
    size: {
      control: { type: 'select' },
      options: ['sm', 'md', 'lg'],
      description: 'Size of the input field'
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
type Story = StoryObj<InputComponent>;

// Default story
export const Default: Story = {
  args: {
    label: 'Email',
    placeholder: 'Enter your email',
    hint: 'We\'ll never share your email',
    type: 'email',
    size: 'md',
    disabled: false,
    required: false
  }
};

// Sizes
export const Sizes: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ctrl-input label="Small Input" size="sm" placeholder="Small size"></ctrl-input>
        <ctrl-input label="Medium Input" size="md" placeholder="Medium size"></ctrl-input>
        <ctrl-input label="Large Input" size="lg" placeholder="Large size"></ctrl-input>
      </div>
    `
  })
};

// Types
export const Types: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ctrl-input label="Text" type="text" placeholder="Enter text"></ctrl-input>
        <ctrl-input label="Email" type="email" placeholder="Enter email"></ctrl-input>
        <ctrl-input label="Password" type="password" placeholder="Enter password"></ctrl-input>
        <ctrl-input label="Number" type="number" placeholder="Enter number"></ctrl-input>
        <ctrl-input label="Phone" type="tel" placeholder="Enter phone number"></ctrl-input>
        <ctrl-input label="URL" type="url" placeholder="Enter URL"></ctrl-input>
      </div>
    `
  })
};

// States
export const States: Story = {
  render: () => ({
    template: `
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <ctrl-input label="Default" placeholder="Normal state"></ctrl-input>
        <ctrl-input label="With Hint" placeholder="With helper text" hint="This is helpful information"></ctrl-input>
        <ctrl-input label="With Error" placeholder="Error state" error="This field is required"></ctrl-input>
        <ctrl-input label="Disabled" placeholder="Disabled state" [disabled]="true"></ctrl-input>
        <ctrl-input label="Required" placeholder="Required field" [required]="true"></ctrl-input>
      </div>
    `
  })
};

// Form Example
export const FormExample: Story = {
  render: () => ({
    template: `
      <form style="max-width: 400px; display: flex; flex-direction: column; gap: 16px;">
        <ctrl-input 
          label="Full Name" 
          placeholder="Enter your full name" 
          [required]="true">
        </ctrl-input>
        
        <ctrl-input 
          label="Email Address" 
          type="email" 
          placeholder="Enter your email" 
          hint="We'll use this to contact you"
          [required]="true">
        </ctrl-input>
        
        <ctrl-input 
          label="Password" 
          type="password" 
          placeholder="Create a password"
          hint="Must be at least 8 characters"
          [required]="true">
        </ctrl-input>
        
        <ctrl-button type="submit" variant="primary" [fullWidth]="true">
          Create Account
        </ctrl-button>
      </form>
    `
  })
};

// Interactive Playground
export const Playground: Story = {
  args: {
    label: 'Input Label',
    placeholder: 'Enter text here',
    hint: '',
    error: '',
    disabled: false,
    required: false,
    type: 'text',
    size: 'md'
  },
  render: (args) => ({
    props: {
      ...args,
      onValueChange: (value: string) => {
        console.log('Value changed:', value);
      },
      onFocus: (event: FocusEvent) => {
        console.log('Input focused:', event);
      },
      onBlur: (event: FocusEvent) => {
        console.log('Input blurred:', event);
      }
    },
    template: `
      <div style="max-width: 400px;">
        <ctrl-input 
          [label]="label"
          [placeholder]="placeholder"
          [hint]="hint"
          [error]="error"
          [disabled]="disabled"
          [required]="required"
          [type]="type"
          [size]="size"
          (valueChange)="onValueChange($event)"
          (focus)="onFocus($event)"
          (blur)="onBlur($event)">
        </ctrl-input>
      </div>
    `
  })
};

