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

  constructor(private museumService: MuseumService) {}

  ngOnInit(): void {
    this.museumService.getAllArtworks(20).subscribe((artworksPage) => {
      console.log(artworksPage);
      console.log(artworksPage.data);
      this.artworks = artworksPage.data;
    });
  }
}
