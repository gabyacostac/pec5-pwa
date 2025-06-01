import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Artwork } from '../../../models/artwork.interface';

@Component({
  selector: 'app-grid',
  standalone: false,
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css',
})
export class GridComponent {
  @Input() artworks: Artwork[] = [] as Artwork[];
  displayedColumns: string[] = ['title', 'artist', 'date'];
  dataSource = this.artworks;

  constructor(private router: Router) {}

  navigateTo(artwork: Artwork): void {
    this.router.navigateByUrl('/artwork/' + artwork.id);
  }
}
