import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';

@Component({
  selector: 'page-success',
  templateUrl: 'success.html'
})
export class SuccessPage {
  public username: string = "";
  constructor(public navParams: NavParams) {
    console.log(this.navParams);
    this.username = this.navParams.get('username');
  }

}
