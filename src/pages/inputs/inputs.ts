import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SuccessPage } from './success/success';

@Component({
    selector: 'page-inputs',
    templateUrl: 'inputs.html'
})
export class InputsPage {
    public labelColor: string = "primary";
    public username: string = "";
    public password: string = "";
    constructor(public navCtrl: NavController, public alertCtrl: AlertController) {

    }

    signIn() {
        console.log(this.username);
        console.log(this.password);
        if (this.username === "animomin" && this.password === "woals") {
            this.navCtrl.push(SuccessPage, {
                username: this.username
            });
        } else {
            console.log('sign in failed');
            this.alertCtrl.create({
                title: 'Sign In Failed',
                subTitle: 'Invalid account information',
                buttons: ['OK']
            }).present();
        }
    }

    doBlur() {
        this.labelColor = this.username ? "secondary" : "danger";
    }

    doFocus() {
        this.labelColor = "primary";
    }

}
