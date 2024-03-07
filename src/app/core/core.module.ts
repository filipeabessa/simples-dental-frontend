import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertSnackbarComponent } from './components/alert-snackbar/alert-snackbar.component';
import { AlertsService } from './service/alerts.service';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [AlertSnackbarComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [AlertSnackbarComponent],
  providers: [AlertsService]
})
export class CoreModule { }
