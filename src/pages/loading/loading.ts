import { Component } from '@angular/core';
import { LoadingController } from 'ionic-angular';
@Component({
    selector: 'page-loading',
    templateUrl: 'loading.html'
})
export class LoadingPage {
    
    constructor(public loadingCtrl: LoadingController){
    }
    getPromise(){
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve("Success!");
            }, 3000);
        });
    }

    presentLoading(){
        let loader = this.loadingCtrl.create({
            content : 'Please wait...', // <h1>Wait!!</h1>
            duration : 2000,
            spinner : 'circles' //hide;circles;ios;cresent;bubbles;
        });
        
        loader.present();
        // loader.dismiss();

    }

    presentLoadingCircles(){
        let loader = this.loadingCtrl.create({
            content : 'Please wait...', // <h1>Wait!!</h1>
            duration : 3000,
            spinner : 'circles' //hide;circles;ios;cresent;bubbles;
        });
        loader.present();

        this.getPromise().then(
            (data) => {
                //resolve
                console.log(data);
                loader.dismiss();
            },
            (error) => { 
                //reject
            }
        )

    }
    presentLoadingBubbles(){
        let loader = this.loadingCtrl.create({
            content : 'Please wait...', // <h1>Wait!!</h1>
            duration : 3000,
            spinner : 'bubbles' //hide;circles;ios;cresent;bubbles;
        });
        loader.present();
    }
    presentLoadingCrescent(){
        let loader = this.loadingCtrl.create({
            content : 'Please wait...', // <h1>Wait!!</h1>
            duration : 3000,
            spinner : 'crescent' //hide;circles;ios;cresent;bubbles;
        });
        loader.present();
    }
}
