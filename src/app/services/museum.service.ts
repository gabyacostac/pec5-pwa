import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtworkData } from '../models/artwork-data.interface';
import { ArtworksPage } from '../models/artwork-page.interface';

@Injectable({
  providedIn: 'root',
})
export class MuseumService {
  private api_url: string;
  constructor(private http: HttpClient) {
    this.api_url = 'https://api.artic.edu/api/v1/artworks';
  }

  getAllArtworks(limit: number): Observable<ArtworksPage> {
    return this.http.get<ArtworksPage>(
      this.api_url +
        '?limit=' +
        limit +
        '&fields=id,title,artist_display,date_display,image_id,category_titles'
    );
  }

  getArtworkById(id: string): Observable<ArtworkData> {
    return this.http.get<ArtworkData>(
      this.api_url +
        '/' +
        id +
        '?fields=id,title,artist_display,date_display,image_id,category_titles'
    );
  }
}
