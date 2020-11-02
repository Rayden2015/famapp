import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    AngularFireModule.initializeApp({
      production: false,
      apiKey: 'AIzaSyA5TnjnJrpOSLRmXS6Qh1esSvC2o2Ft9yk',
      authDomain: 'famapp-e133c.firebaseapp.com',
      databaseURL: 'https://famapp-e133c.firebaseio.com',
      projectId: 'famapp-e133c',
      storageBucket: 'famapp-e133c.appspot.com',
      messagingSenderId: '817284253902',
      appId: '1:817284253902:web:ca2724fb8dd83bb03aa89f',
      measurementId: 'G-3B41FFX068'
    })
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AngularFirestoreModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
