import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListAlbumsContainerComponent } from './containers/list-albums-container/list-albums-container.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card';
import { AlbumDetailsContainerComponent } from './containers/album-details-container/album-details-container.component';



@NgModule({
  declarations: [
    ListAlbumsContainerComponent,
    AlbumDetailsContainerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    SharedModule
  ],
  exports: [
    ListAlbumsContainerComponent,
    AlbumDetailsContainerComponent
  ]
})
export class AlbumsModule { }
