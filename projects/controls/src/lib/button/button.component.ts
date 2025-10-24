import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

export type ButtonVariant = 'basic' | 'raised' | 'stroked' | 'flat';
export type ButtonColor = 'primary' | 'accent' | 'warn';
export type ButtonSize = 'sm' | 'md' | 'lg';

@Component({
  selector: 'ctrl-button',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatProgressSpinnerModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input() variant: ButtonVariant = 'basic';
  @Input() color: ButtonColor = 'primary';
  @Input() size: ButtonSize = 'md';
  @Input() disabled = false;
  @Input() loading = false;
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() fullWidth = false;
  
  @Output() clicked = new EventEmitter<Event>();

  onClick(event: Event): void {
    if (!this.disabled && !this.loading) {
      this.clicked.emit(event);
    }
  }

  get buttonClasses(): string {
    const classes = [
      'ctrl-button',
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

  get materialDirective(): string {
    switch (this.variant) {
      case 'basic': return 'mat-button';
      case 'raised': return 'mat-raised-button';
      case 'stroked': return 'mat-stroked-button';
      case 'flat': return 'mat-flat-button';
      default: return 'mat-button';
    }
  }
}

