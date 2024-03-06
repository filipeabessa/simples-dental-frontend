import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  label: string;
  click: () => void = () => { };

  constructor() {
    this.label = 'Click me';
    this.click = () => {
      console.log('Button clicked');
    };
  }
}
