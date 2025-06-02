import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Artwork } from '../../models/artwork.interface';
import { MuseumService } from '../../services/museum.service';

@Component({
  selector: 'app-artwork-detail',
  standalone: false,
  templateUrl: './artwork-detail.component.html',
  styleUrl: './artwork-detail.component.css',
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
export class ArtworkDetailComponent implements OnInit {
  artwork!: Artwork;
  image_url!: string;
  isLoading: boolean = false;
  showDetails: boolean = false;

  constructor(
    private museumService: MuseumService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.artwork = {} as Artwork;
  }

  ngOnInit(): void {
    this.isLoading = true;
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    if (identifier) {
      this.museumService.getArtworkById(identifier).subscribe((artwork) => {
        if (!artwork) {
          return this.router.navigateByUrl('/');
        }
        this.isLoading = false;
        this.artwork = artwork.data;
        this.image_url = artwork.config.iiif_url;
        this.artwork.iiif_url =
          this.image_url +
          '/' +
          this.artwork.image_id +
          '/full/600,/0/default.jpg';

        return;
      });
    }
  }

  toggleShowDetails() {
    this.showDetails = !this.showDetails;
  }
}
