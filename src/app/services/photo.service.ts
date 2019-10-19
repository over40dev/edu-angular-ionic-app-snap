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
import IPic from '../interfaces/IPic';

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
      if (this.pics.length > 0) {
        const today = new Date();
        const lastDate = new Date(this.pics[0].dateTaken);

        if (lastDate.setHours(0, 0, 0, 0) === today.setHours(0, 0, 0, 0)) {
          this.picTaken = true;
        } else {
          this.picTaken = false;
        }
      }
    });
  }

  takePhoto(): Promise<any> {
    let result: any;

    return new Promise(async (resolve, reject) => {
      if (!this.loaded || this.picTaken) {
        reject('Not allowed to take photo');
      }

      const options = {
        quality: 50,
        width: 600,
        allowEditing: false,
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera,
      };

      const photo = await Camera.getPhoto(options);

      result = await Filesystem.readFile({
        path: photo.path,
      });

      const date = new Date();
      const time = date.getTime();
      const fileName = time + '.jpeg';

      result = await Filesystem.writeFile({
        data: result.data,
        path: fileName,
        directory: FilesystemDirectory.Data,
      });

      const { uri } = await Filesystem.getUri({
        directory: FilesystemDirectory.Data,
        path: fileName,
      });

      const filePath = Capacitor.convertFileSrc(uri);

      this.createPhoto(fileName, filePath);
      resolve(uri);
    });
  }

  createPhoto(name: string, path: string) {

  }

  save(): void {
    this.dataService.save(this.pics);
  }
}
