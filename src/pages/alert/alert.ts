import { Component } from '@angular/core';
import { AlertController } from 'ionic-angular';

@Component({
  templateUrl: 'alert.html'
})
export class AlertPage {

  constructor(public alertCtrl: AlertController) {

  }

  showBasicAlert() {
    let alert = this.alertCtrl.create({
      title: 'Basic Alert',
      subTitle: 'this is Basic Alert',
      buttons: ['OK', '??']
    });
    alert.present();
  }
  showPromptAlert() {
    let prompt = this.alertCtrl.create({
      title: 'Login',
      message: 'input your password',
      inputs: [
        {
          name: 'password',
          placeholder: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: () => {

          }
        },
        {
          text: 'Next',
          handler: (data) => {
            console.log(data.password);
          }
        }
      ]
    });
    prompt.present();
  }
  showComfirmationAlert() {
    // var comfirm = this.alertCtrl.create({
    //   title: 'Comfirmation Alert',
    //   subTitle: 'this is Comfirmation Alert',
    //   buttons: ['OK', '??']
    // })
  }
  showRadioAlert() {
    let rdoAlert = this.alertCtrl.create();
    rdoAlert.setTitle('Radio Alert');
    rdoAlert.addInput({
      type: 'radio',
      label: '서울',
      value: 'seoul',
      checked: true
    });
    rdoAlert.addInput({
      type: 'radio',
      label: '부산',
      value: 'busan'
    });
    rdoAlert.addInput({
      type: 'radio',
      label: '대구',
      value: 'daegu'
    });
    rdoAlert.addButton('Cancel');
    rdoAlert.addButton({
      text : 'Ok',
      handler : (data) => {        
        console.log(data);
      }
    });
    rdoAlert.present();

  }
  showCheckboxAlert() {

  }

}
