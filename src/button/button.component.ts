import { Component, Input, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cdsButton',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() icon: string = '';
  @Input() type: 'primary' | 'secondary' | 'tertiary' = 'primary';
}
