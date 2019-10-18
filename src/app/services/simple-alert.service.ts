import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export default class SimpleAlertService {
  constructor(private alertCtrl: AlertController) {}

  createAlert(header: string, message: string): Promise<any> {
    return this.alertCtrl.create({
      header,
      message,
      buttons: [
        {
          text: 'Ok',
        },
      ],
    });
  }
}
