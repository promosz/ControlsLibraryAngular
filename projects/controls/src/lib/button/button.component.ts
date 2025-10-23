import { Component, Input, Output, EventEmitter, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'text';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ctrl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ButtonComponent),
      multi: true
    }
  ]
})
export class ButtonComponent implements ControlValueAccessor {
  @Input() variant: ButtonVariant = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  
  @Output() clicked = new EventEmitter<Event>();

  private onChange = (value: any) => {};
  private onTouched = () => {};

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
      this.onChange(event);
      this.onTouched();
    }
  }

  // ControlValueAccessor implementation
  writeValue(value: any): void {
    // Button doesn't need to write values
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  get buttonClasses(): string {
    const classes = [
      'ctrl-button',
      `ctrl-button--${this.variant}`,
      `ctrl-button--${this.size}`
    ];

    if (this.disabled) {
      classes.push('ctrl-button--disabled');
    }

    if (this.loading) {
      classes.push('ctrl-button--loading');
    }

    if (this.fullWidth) {
      classes.push('ctrl-button--full-width');
    }

    return classes.join(' ');
  }
}
