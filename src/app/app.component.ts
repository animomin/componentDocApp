import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { ActionSheetPage } from '../pages/action-sheet/action-sheet'
import { AlertPage } from '../pages/alert/alert';
import { ButtonPage } from '../pages/button/button';
import { CardPage } from '../pages/card/card';
import { DateTimePage } from '../pages/datetime/datetime';
import { FABsPage } from '../pages/fabs/fabs';
import { GesturesPage } from '../pages/gestures/gestures';
import { IconsPage } from '../pages/icons/icons';
import { InputsPage } from '../pages/inputs/inputs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = InputsPage;  // start page

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Action Sheet', component: ActionSheetPage },
      { title: 'Alert', component: AlertPage },
      { title: 'Button', component: ButtonPage },
      { title: 'Card', component: CardPage },
      { title: 'DateTime', component: DateTimePage },
      { title: 'FABs', component: FABsPage },
      { title: 'Gestures', component: GesturesPage },
      { title: 'Icons', component: IconsPage },
      { title: 'Inputs', component: InputsPage },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
