import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';



export interface Profile {
  displayName?: string;
  email?: string;
  phoneNumber?: string;
  uuid?: string;
}


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})



export class Tab3Page {

  public profile: Profile = {
    displayName: '',
    email: '',
    phoneNumber: ''
  };

  constructor(
    private route: Router,
    private afAuth: AngularFireAuth,
    private toastCtrl: ToastController
    ) {}


  updateProfile(profile: Profile) {
    this.afAuth.onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in.
        user.updateProfile(profile).then(function() {
        console.log('Profile Page | updateProfile() | Profile update succesfully');
        this.toastCtrl.create({
          message: 'Profile update succesfully',
          duration: 3000
        }).then(toast => toast.present());
      }, function(error) {
        // An error happened.
        console.error('Profile Page | updateProfile() |' + error.message);
      });

      } else {
        // No user is signed in.
        
      }

    });

  }

}
