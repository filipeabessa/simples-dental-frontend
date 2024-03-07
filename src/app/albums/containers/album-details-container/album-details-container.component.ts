import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumService } from '../../service/album.service';
import { Photo } from '../../types';

@Component({
  selector: 'app-album-details-container',
  templateUrl: './album-details-container.component.html',
  styleUrl: './album-details-container.component.scss'
})
export class AlbumDetailsContainerComponent implements OnInit {
  constructor(private activatedRoute: ActivatedRoute, private albumService: AlbumService) { }

  photos: Photo[] = [];

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.handleGetPhotosByAlbumId(params['id']);
    });
  }

  handleGetPhotosByAlbumId(id: number) {
    this.albumService.getPhotosByAlbumId(id)
      .subscribe(photos => {
        this.photos = photos;
        console.log('AlbumDetailsContainerComponent.handleGetAlbum', photos);
      });
  }

}
