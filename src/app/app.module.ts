import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { ActionSheetPage } from '../pages/action-sheet/action-sheet';
import { AlertPage } from '../pages/alert/alert';
import { ButtonPage } from '../pages/button/button';
import { CardPage } from '../pages/card/card';
import { BackgroundCardPage } from '../pages/card/bg-card/bg-card';
import { SocialCardPage } from '../pages/card/social-card/social-card';

@NgModule({
  declarations: [
    MyApp,
    ActionSheetPage,
    AlertPage,
    ButtonPage,
    CardPage,    
    BackgroundCardPage,
    SocialCardPage

  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ActionSheetPage,
    AlertPage,
    ButtonPage,
    CardPage,
    BackgroundCardPage,
    SocialCardPage
  ],
  providers: [{ provide: ErrorHandler, useClass: IonicErrorHandler }]
})
export class AppModule { }
