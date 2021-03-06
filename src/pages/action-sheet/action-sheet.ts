import { Component } from '@angular/core';
import { ActionSheetController } from 'ionic-angular';

@Component({
  templateUrl: 'action-sheet.html'
})
export class ActionSheetPage {

  constructor(public actionSheetCtrl: ActionSheetController) {

  }

  presentActionSheet() {
    let actionSheet = this.actionSheetCtrl.create({
      title: "Action Sheet Demo",
      buttons: [
        {
          text: 'delete',
          role: 'destructive',
          handler: () => {

          }
        },
        {
          text: 'button',
          handler: () => {

          }
        },
        {
          text: 'cancel',
          role: 'cancel',
          handler: () => {

          }
        }
      ]
    });
    actionSheet.present();
  }
}