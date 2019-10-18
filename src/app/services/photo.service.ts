import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PhotoService implements OnInit {

  public pics: Array<string>;
  public picTaken: boolean;

  constructor() { }

  ngOnInit() {
    this.pics = ['https://placehold.it/100x100'];
  }
}
