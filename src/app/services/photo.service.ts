import { Injectable } from '@angular/core';
import { Platform } from '@ionic/angular';
import {
  Plugins,
  Capacitor,
  CameraResultType,
  CameraSource,
  FilesystemDirectory,
} from '@capacitor/core';
import DataService from './data.service';

interface IPic {
  name: string;
  path: string;
  dateTaken: Date;
}

const { Camera, Filesystem } = Plugins;

@Injectable({
  providedIn: 'root',
})
export default class PhotoService {
  public pics: Array<IPic>;
  public loaded = false;
  public picTaken: boolean;

  constructor(private dataService: DataService, private platform: Platform) {}

  load(): void {
    // Uncomment to use test data
    this.pics = [
      {
        name: 'test',
        path: 'https://placehold.it/100x100',
        dateTaken: new Date(2018, 5, 5),
      },
      {
        name: 'test',
        path: 'https://placehold.it/100x100',
        dateTaken: new Date(2018, 5, 6),
      },
      {
        name: 'test',
        path: 'https://placehold.it/100x100',
        dateTaken: new Date(2018, 5, 8),
      },
      {
        name: 'test',
        path: 'https://placehold.it/100x100',
        dateTaken: new Date(2018, 5, 10),
      },
    ];

    this.platform.resume.subscribe(() => {
      const today = new Date();
      const lastTaken = new Date(this.pics[0].dateTaken);

      if (lastTaken.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
        this.picTaken = true;
      } else {
        this.picTaken = false;
      }
    });
  }
}
