import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.page.html',
  styleUrls: ['./slideshow.page.scss'],
})
export class SlideshowPage implements OnInit {

  public imageSrc: SafeResourceUrl;

  constructor() { }

  ngOnInit() {
  }

  playPhotos() {

  }

  close() {
    
  }

}
