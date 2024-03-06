import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {
  title: string = 'Login';

  constructor(private router: Router) { }

  handleLogin(event: any) {
    console.log('LoginContainerComponent.onLogin', event);
    localStorage.setItem('isLoggedIn', 'true');
    this.router.navigate(['/albums']);
  }
}

