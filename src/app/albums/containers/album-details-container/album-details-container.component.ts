import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-album-details-container',
  templateUrl: './album-details-container.component.html',
  styleUrl: './album-details-container.component.scss'
})
export class AlbumDetailsContainerComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  photos: Photo[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.handleGetAlbum(params['id']);
    });
  }

  handleGetAlbum(id: number) {
    this.httpClient.get<Photo[]>(`https://jsonplaceholder.typicode.com/albums/${id}/photos?_limit=10`)
      .subscribe(photos => {
        this.photos = photos;
        console.log('AlbumDetailsContainerComponent.handleGetAlbum', photos);
      });
  }

}

type Photo = {
  id: number;
  albumId: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};
