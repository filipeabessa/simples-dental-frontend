import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { CardComponent } from './components/card/card.component';
import { ButtonComponent } from './components/button/button.component';



@NgModule({
  declarations: [
    CardComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    CardComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
