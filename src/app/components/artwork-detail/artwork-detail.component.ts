import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artwork } from '../../models/artwork.interface';
import { MuseumService } from '../../services/museum.service';

@Component({
  selector: 'app-artwork-detail',
  standalone: false,
  templateUrl: './artwork-detail.component.html',
  styleUrl: './artwork-detail.component.css',
})
export class ArtworkDetailComponent implements OnInit {
  artwork!: Artwork;
  image_url!: string;

  constructor(
    private museumService: MuseumService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    console.log('constructor');
  }

  ngOnInit(): void {
    console.log('ngoninit');
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    console.log(identifier);
    if (identifier) {
      this.museumService.getArtworkById(identifier).subscribe((artwork) => {
        if (!artwork) {
          return this.router.navigateByUrl('/');
        }
        console.log(artwork);

        this.image_url = artwork.config.iiif_url;
        this.artwork = artwork.data;
        this.artwork.iiif_url = this.image_url;
        return;
      });
    }
  }
}
