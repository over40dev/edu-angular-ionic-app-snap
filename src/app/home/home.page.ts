import { Component, OnInit, ViewChild } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  ModalController,
  AlertController,
  LoadingController,
  IonList,
} from '@ionic/angular';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { SlideshowPage } from '../slideshow/slideshow.page';
import { PhotoService, AlertService } from '../services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public photoTaken: boolean;
  @ViewChild(IonList, {static: false}) slidingList: IonList;

  constructor(
    public photoService: PhotoService,
    private alertCtrl: AlertController,
    private alertService: AlertService,
    private modalCtrl: ModalController,
    private socialSharing: SocialSharing,
    private loadingCtrl: LoadingController,
    public sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.photoService.load();
  }

  playSlideshow() {
    console.log('play slideshow');
  }

  takePhoto() {
    console.log('take pic');
  }

  deletePhoto(pic: string) {
    console.log('delete pic', pic);
  }
}
