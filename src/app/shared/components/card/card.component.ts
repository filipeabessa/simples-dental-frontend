import { Component, EventEmitter, HostListener, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class CardComponent {
  @Input() title: string = 'title';
  @Input() subtitle: string = 'subtitle';
  @Input() actionButtons: Button[] = [];
  @Output() click = new EventEmitter<void>(); // Declare output property

  onClick(event: Event) {
    event.stopPropagation(); // Prevents the event from bubbling up the DOM tree
    this.click.emit();
  }
}
interface Button {
  label: string;
  action: () => void;
}
