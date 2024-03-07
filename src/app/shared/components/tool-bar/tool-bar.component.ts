import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tool-bar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatIconModule
  ],
  templateUrl: './tool-bar.component.html',
  styleUrl: './tool-bar.component.scss'
})
export class ToolBarComponent {
  constructor(private router: Router) { }

  title: string = 'Teste tecnico - Frontend - Angular';

  goBack() {
    this.router.navigate(['../'], { relativeTo: this.router.routerState.root });
  }


}
