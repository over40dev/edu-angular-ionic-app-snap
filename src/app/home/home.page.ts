import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public photoTaken: boolean;

  constructor(
    public photoService: PhotoService,
  ) {}

  playSlideshow() {
    console.log('play slideshow');
  }

  takePhoto() {
    console.log('take photo');
  }

  deletePhoto(pic) {
    console.log('del', pic);
  }
}
