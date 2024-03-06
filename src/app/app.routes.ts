import { RouterModule, Routes } from '@angular/router';
import { LoginContainerComponent } from './auth/containers/login-container/login-container.component';
import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { ListAlbumsContainerComponent } from './albums/containers/list-albums-container/list-albums-container.component';
import { AlbumsModule } from './albums/albums.module';

export const routes: Routes = [
  {
    path: 'auth/login', component: LoginContainerComponent
  },
  {
    path: 'albums',
    component: ListAlbumsContainerComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    AuthModule,
    AlbumsModule
  ],
  exports: [RouterModule],
})

export class AppRoutingModule { }
