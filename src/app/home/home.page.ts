import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ModalController,
  AlertController,
  LoadingController,
  IonList,
} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {
  PhotoService,
  AlertService,
} from '../services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public photoTaken: boolean;

  constructor(
    public photoService: PhotoService,
    private alertService: AlertService
  ) {}

  ngOnInit() {}

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
