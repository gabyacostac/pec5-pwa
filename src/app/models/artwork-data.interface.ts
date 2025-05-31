import { Artwork } from './artwork.interface';
import { ArtworksConfig } from './artworks-config.interface';
import { ArtworksInfo } from './artworks-info.interface';

export interface ArtworkData {
  data: Artwork;
  config: ArtworksConfig;
  info: ArtworksInfo;
}
