import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { LoginContainerComponent } from './containers/login-container/login-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { MatInputModule, MatFormField } from '@angular/material/input';



@NgModule({
  declarations: [
    LoginContainerComponent,
    LoginFormComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    FormsModule,
    MatFormField,
    MatInputModule
  ],
  exports: [
    LoginContainerComponent
  ]
})
export class AuthModule { }
