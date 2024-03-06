import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsContainerComponent } from './containers/list-albums-container/list-albums-container.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';



@NgModule({
  declarations: [
    ListAlbumsContainerComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    ListAlbumsContainerComponent
  ]
})
export class AlbumsModule { }
