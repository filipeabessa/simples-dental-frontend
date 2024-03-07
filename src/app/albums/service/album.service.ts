import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Album, Photo } from '../types';
import { Observable } from 'rxjs';
import { ALBUMS_ENDPOINT, BASE_URL, PHOTOS_ENDPOINT } from './constants';

@Injectable({
  providedIn: 'root'
})
export class AlbumService {

  constructor(private httpClient: HttpClient) { }

  getAlbums(limit: number = 10): Observable<Album[]> {
    const url = `${BASE_URL}/${ALBUMS_ENDPOINT}?_limit=${limit}`;

    return this.httpClient.get<Album[]>(url);
  }

  getPhotosByAlbumId(id: number, limit: number = 10): Observable<Photo[]> {
    const url = `${BASE_URL}/${ALBUMS_ENDPOINT}/${id}/${PHOTOS_ENDPOINT}?_limit=${limit}`;

    return this.httpClient.get<Photo[]>(url);
  }
}
