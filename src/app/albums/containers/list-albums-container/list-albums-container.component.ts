
import { Component, OnInit } from '@angular/core';
import { Album } from '../../types';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-albums-container',
  templateUrl: './list-albums-container.component.html',
  styleUrls: ['./list-albums-container.component.scss'] // Corrected here
})
export class ListAlbumsContainerComponent implements OnInit {
  constructor(private httpClient: HttpClient) { }

  title: string = 'List Albums';
  albums: Album[] = [];



  ngOnInit() {
    this.handleGetAlbums();

    if (this.albums.length > 0) {
      this.albums.forEach(album => {
        this.handleGetAlbumsFirstPicture(album.id);
      });
    }

  }

  handleGetAlbums() {
    this.httpClient.get<Album[]>('https://jsonplaceholder.typicode.com/albums?_limit=10')
      .subscribe(albums => {
        this.albums = albums;
      });
  }

  handleGetAlbumsFirstPicture(id: number) {
    this.httpClient.get<Album[]>(`https://jsonplaceholder.typicode.com/photos?albumId=${id}&_limit=1`)
      .subscribe(photos => {
        this.albums[id].thumbnailUrl = photos[0].thumbnailUrl;
      });
  }

  handleAlbumSelected(event: any) {
    console.log('ListAlbumsContainerComponent.onAlbumSelected', event);
  }
}