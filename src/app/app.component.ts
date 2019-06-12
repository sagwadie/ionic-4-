import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

//import { Plugins } from '@capacitor/core';
//import { SplashScreen } from '@ionic-native/splash-screen/ngx';
//import { StatusBar } from '@ionic-native/status-bar/ngx';
//const { SplashScreen, StatusBar } = Plugins;


import { firebaseConfig } from './config/credentials';


import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar

    //private splashScreen: SplashScreen,
    //private statusBar: StatusBar
    //private afAuth: AngularFireAuth
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then((pl) => {
      if (pl === 'cordova'){
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      }
    });
    
  }

/*  initializeApp() {
    this.platform.ready().then(() => {

      firebase.initializeApp(firebaseConfig);
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
      //SplashScreen.hide().catch(error => {
      //console.warn(error);
   // });
    StatusBar.hide().catch(error => {
      console.warn(error);
    });
      
    });
    */


    /*
    afAuth.authState.subscribe(user => {
      if (!user) {
        this.rootPage = Login;
        console.log('user doesn’t exist');
        //unsubscribe();
      } else {
        this.rootPage = TabsPage;//HomePage;
        console.log('user exist');
        //unsubscribe();
      }      
    });
  */

/*
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.rootPage = 'LoginPage';
        unsubscribe();
      } else {
        this.rootPage = TabsPage;//HomePage;
        unsubscribe();
      }
    });
*/

}
