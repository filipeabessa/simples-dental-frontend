import { Component } from '@angular/core';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {
  title: string = 'Login';

  constructor() { }

  handleLogin(event: any) {
    console.log('LoginContainerComponent.onLogin', event);
    localStorage.setItem('isLoggedIn', 'true');
  }
}

