import { Component, OnInit } from '@angular/core';
import { Artwork } from '../../models/artwork.interface';
import { MuseumService } from '../../services/museum.service';

@Component({
  selector: 'app-artwork-list',
  standalone: false,
  templateUrl: './artwork-list.component.html',
  styleUrl: './artwork-list.component.css',
})
export class ArtworkListComponent implements OnInit {
  artworks: Artwork[] = [];
  iiif_url: string = '';
  isTable: boolean = true;

  constructor(private museumService: MuseumService) {}

  ngOnInit(): void {
    this.museumService.getAllArtworks(20).subscribe((artworksPage) => {
      console.log('this.artworks ->', this.artworks);
      console.log('artworksPage ->', artworksPage);
      console.log('artworksPage.data ->', artworksPage.data);

      this.artworks = artworksPage.data;
      this.iiif_url = artworksPage.config.iiif_url;
      this.artworks.forEach((artwork) => {
        artwork.iiif_url =
          this.iiif_url + '/' + artwork.image_id + '/full/843,/0/default.jpg';
      });

      console.log('this.artworks ->', this.artworks);
    });
  }
}
