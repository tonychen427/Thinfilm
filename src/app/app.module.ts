import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule } from '@ionic/storage';

import { NoteProvider } from '../providers/notes';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home';
import { NewNotePage } from '../pages/note/form';
import { ListNotePage } from '../pages/note/list';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    NewNotePage,
    ListNotePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    NewNotePage,
    ListNotePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NoteProvider,
    InAppBrowser,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
