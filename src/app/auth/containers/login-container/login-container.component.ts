import { Component } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {
  actionButtons: Button[] = [
    { label: 'Login', action: this.onLogin },
  ];

  constructor() { }

  onLogin() {
    console.log('Login');
  }
}

type Button = {
  label: string;
  action: () => void;
}
