import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/auth-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  constructor(
    public authService: AuthenticationService,
    public router: Router
  ) {}



  ngOnInit() {
    this.router.navigate(['tabs/tabs/tab1']);
  }

  logIn(email, password) {
    // this.authService.SignIn(email.value, password.value)
    this.authService.SignIn('nurundin2010@gmail.com', 'password')
      .then((res) => {
        // if (this.authService.) {
        //   this.router.navigate(['tabs/tabs/tab1']);
        // } else {
        //   window.alert('Email is not verified');
        //   return false;
        // }
        
        this.router.navigate(['tabs/tabs/tab1']);
      }).catch((error) => {
        window.alert(error.message);
      });
  }

  goToRegisterPage(){
    this.router.navigateByUrl('/registration');
  }

}
