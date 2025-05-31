import { Artwork } from './artwork.interface';
import { ArtworksConfig } from './artworks-config.interface';
import { ArtworksInfo } from './artworks-info.interface';
import { ArtworksPagination } from './artworks-pagination.interface';

export interface ArtworksPage {
  pagination: ArtworksPagination;
  data: Artwork[];
  config: ArtworksConfig;
  info: ArtworksInfo;
}
