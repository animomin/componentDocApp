import { Component } from '@angular/core';
import { NavParams, ModalController, ViewController } from 'ionic-angular';

@Component({
    selector: 'page-modals',
    templateUrl: 'modals.html'
})
export class ModalsPage {
    
    title : string = '';

    emails: Array<{ address: string, body: string }>;

    constructor(public navParams: NavParams, public modalCtrl: ModalController){
        this.title = navParams.get('pageTitle');
        this.emails =[
            { address : "animomin@daum.net", body: "this is daum mail" },
            { address : "reaqermin@gmail.com", body: "this is google mail" },
            { address : "sjm@neochart.co.kr", body: "this is company mail" }
        ];
    }

    openModalPage(email){
        let modal = this.modalCtrl.create(ModalDetailPage, {
            address : email.address,
            body : email.body
        });
        modal.present();
    }
   
}

@Component({
    template: `
    <ion-header>
        <ion-toolbar>
            <ion-title>Detail</ion-title>
            <ion-buttons start>
                <button ion-button (click)="dismiss()">
                    <span ion-text color="primary">Cancel</span>
                </button>
            </ion-buttons>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <h1>{{address}}</h1>
        <p>{{body}}</p>
    </ion-content>
    `
})
export class ModalDetailPage{
    address: string;
    body: string;
    constructor(public navParams: NavParams, public viewCtrl: ViewController){
        this.address = navParams.get('address');
        this.body = navParams.get('body');
    }

    dismiss(){
        this.viewCtrl.dismiss();
    }
}
