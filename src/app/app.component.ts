import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';

import { Plugins } from '@capacitor/core';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private platform: Platform) {}

  ngOnInit() {
    SplashScreen.hide().catch(err => {
      console.error(err);
    });

    StatusBar.hide().catch(err => {
      console.error(err);
    });

    if (this.platform.is('capacitor')) {
      console.log('cap');
    }
  }
}
