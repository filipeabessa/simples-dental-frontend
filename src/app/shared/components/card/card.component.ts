import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() title: string = 'title';
  @Input() subtitle: string = 'subtitle';
  @Input() actionButtons: Button[] = [];
}

interface Button {
  label: string;
  action: () => void;
}
