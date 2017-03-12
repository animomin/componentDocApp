import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BackgroundCardPage } from './bg-card/bg-card';
import { SocialCardPage } from './social-card/social-card';

@Component({
  templateUrl: 'card.html'
})
export class CardPage {

  constructor(public navCtrl: NavController) {

  }

  openBackgroundPage(){
    this.navCtrl.push(BackgroundCardPage);
  }
  openSocialPage(){
    this.navCtrl.push(SocialCardPage);
  }

}
