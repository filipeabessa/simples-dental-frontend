import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginContainerComponent } from './containers/login-container/login-container.component';



@NgModule({
  declarations: [
    LoginContainerComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    LoginContainerComponent
  ]
})
export class AuthModule { }
