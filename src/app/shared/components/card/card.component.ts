import { Component, Input } from '@angular/core';
import { Artwork } from '../../../models/artwork.interface';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent {
  @Input() artwork: Artwork = {} as Artwork;
}
