import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatProgressSpinnerModule
  ],
  exports: [
    CardComponent,
    ButtonComponent,
    SpinnerComponent
  ]
})
export class SharedModule { }
