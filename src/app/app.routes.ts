import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './auth/containers/login-container/login-container.component';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';

export const routes: Routes = [
  {
    path: 'auth/login', component: LoginContainerComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
