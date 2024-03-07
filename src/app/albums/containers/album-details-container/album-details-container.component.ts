import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlbumService } from '../../service/album.service';
import { Photo } from '../../models';

@Component({
  selector: 'app-album-details-container',
  templateUrl: './album-details-container.component.html',
  styleUrl: './album-details-container.component.scss'
})
export class AlbumDetailsContainerComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private albumService: AlbumService,
    private router: Router
  ) { }
  title: string = 'Fotos do Album'
  photos: Photo[] = [];

  ngOnInit(): void {
    if (!localStorage.getItem('isLoggedIn')) {
      this.router.navigate(['auth/login']);
    }
    this.activatedRoute.params.subscribe(params => {
      this.handleGetPhotosByAlbumId(params['id']);
    });
  }

  handleGetPhotosByAlbumId(id: number) {
    this.albumService.getPhotosByAlbumId(id)
      .subscribe(photos => {
        this.photos = photos;
      });
  }

}
