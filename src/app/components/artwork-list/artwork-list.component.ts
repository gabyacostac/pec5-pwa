import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../models/artwork.interface';
import { MuseumService } from '../../services/museum.service';

@Component({
  selector: 'app-artwork-list',
  standalone: false,
  templateUrl: './artwork-list.component.html',
  styleUrl: './artwork-list.component.css',
  animations: [
    trigger('fadeInUp', [
      transition('* <=> *', [
        query(':enter', [style({ transform: 'translateY(5%)', opacity: 0 })], {
          optional: true,
        }),
        query(
          ':enter',
          [
            stagger('100ms', [
              animate(
                '500ms ease-in-out',
                style({ transform: 'translateY(0)', opacity: 1 })
              ),
            ]),
          ],
          { optional: true }
        ),
      ]),
    ]),
  ],
})
export class ArtworkListComponent implements OnInit {
  artworks: Artwork[] = [];
  iiif_url: string = '';
  isTable: boolean = false;
  isLoading: boolean = false;

  constructor(private museumService: MuseumService) {}

  ngOnInit(): void {
    this.isLoading = true;
    this.museumService.getAllArtworks(20).subscribe((artworksPage) => {
      this.isLoading = false;
      this.artworks = artworksPage.data;
      this.iiif_url = artworksPage.config.iiif_url;
      this.artworks.forEach((artwork) => {
        artwork.iiif_url =
          this.iiif_url + '/' + artwork.image_id + '/full/400,/0/default.jpg';
      });
    });
  }

  toggleView(): void {
    this.isTable = !this.isTable;
  }
}
