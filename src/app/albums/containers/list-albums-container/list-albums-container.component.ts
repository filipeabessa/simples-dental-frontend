
import { Component, OnInit } from '@angular/core';
import { Album } from '../../models';
import { Router } from '@angular/router';
import { AlbumService } from '../../service/album.service';

@Component({
  selector: 'app-list-albums-container',
  templateUrl: './list-albums-container.component.html',
  styleUrls: ['./list-albums-container.component.scss'] // Corrected here
})
export class ListAlbumsContainerComponent implements OnInit {
  constructor(private albumService: AlbumService, private router: Router) { }

  title: string = 'Lista de Albums';
  albums: Album[] = [];

  ngOnInit() {
    this.handleGetAlbums()
  }

  handleGetAlbums() {
    this.albumService.getAlbums(10)
      .subscribe(albums => {
        this.albums = albums;
      }).add(() => {
        this.albums.forEach(album => {
          this.handleGetAlbumsFirstPicture(album.id);
        })
      });
  }

  handleGetAlbumsFirstPicture(id: number) {
    this.albumService.getPhotosByAlbumId(id, 1)
      .subscribe(photos => {
        this.albums[id - 1].thumbnailUrl = photos[0].thumbnailUrl;
      });
  }

  handleAlbumSelected(album: Album) {
    this.router.navigate([`/albums/${album.id}`]);
  }
}
