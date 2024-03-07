import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertsService } from '../../../core/service/alerts.service';

@Component({
  selector: 'app-login-container',
  templateUrl: './login-container.component.html',
  styleUrl: './login-container.component.scss'
})
export class LoginContainerComponent {
  title: string = 'Login';

  constructor(private router: Router, private alertsService: AlertsService) { }

  handleLogin(event: any) {
    console.log('LoginContainerComponent.onLogin', event);
    localStorage.setItem('isLoggedIn', 'true');
    this.alertsService.successSnackbar('Login efetuado com sucesso!');
    this.router.navigate(['/albums']);
  }
}

