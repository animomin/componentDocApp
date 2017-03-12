import { Component } from '@angular/core';

@Component({
  selector: 'page-icons',
  templateUrl: 'icons.html'
})
export class IconsPage {
  public myIcon: string = "logo-facebook";
  constructor() {

  }
  changeIcon(){
    this.myIcon = this.myIcon === "logo-facebook" ? "logo-twitter" : "logo-facebook";
  }
}
