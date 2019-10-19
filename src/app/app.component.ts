import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { Plugins } from '@capacitor/core';

const { Statusbar, SplashScreen } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private platform: Platform,
  ) {}

  ngOnInit() {
    SplashScreen.hide()
      .catch((err) => {
        console.error(err);
      });

    Statusbar.hide()
      .catch((err) => {
        console.error(err);
      });

    if (this.platform.is('hybrid')) {
      console.log('hybrid');
    }
  }
}
