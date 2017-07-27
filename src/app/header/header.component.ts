import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  isLoggedOut: boolean = false;

    fullNameValue: string;
    emailValue: string;
    passwordValue: string;

    errorMessage: string;

    loginEmail: string;
    loginPassword: string;

    loginErrorMessage: string;


    constructor(
      private authThang: AuthService,
      private routerThang: Router
    ) { }

    ngOnInit() {
      this.checklogin();
      this.authThang.loggedIn$.subscribe((userStatus) =>{
        if (userStatus) {
          this.isLoggedOut = false;
        } else {
          this.isLoggedOut = true;
        }
      })
    }

    doSignUp() {
      this.authThang.signup(this.fullNameValue, this.emailValue, this.passwordValue)
        .then((resultFromApi) => {
            this.checklogin();
            // clear form
            this.fullNameValue = "";
            this.emailValue = "";
            this.passwordValue = "";

            // clear error message
            this.errorMessage = "";

            // redirect to /camels
            this.routerThang.navigate(['/login']);
        })
        .catch((err) => {
            const parsedError = err.json();
            this.errorMessage = parsedError.message + 'Try Again';
        });
    } // close doSignUp()

    doLogin() {
      this.authThang.login(this.loginEmail, this.loginPassword)
        .then((resultFromApi) => {

            // clear the form
            this.loginEmail = "";
            this.loginPassword = "";

            // clear the error message
            this.loginErrorMessage = "";

            // redirect to /camels
            this.routerThang.navigate(['/login']);
        })
        .catch((err) => {
            const parsedError = err.json();
            this.loginErrorMessage = parsedError.message + 'Try Again';
        });
    } // close doLogin()

    logout() {
      this.authThang.logout()
        .then(() => {
            this.checklogin();


      })
        .catch(() => {console.log("Didn't log out")})
    }

    checklogin(){
      this.authThang.checklogin()
        // If success, we are logged in.
        .then((resultFromApi) => {
            this.isLoggedOut = false;
        })

        // Even if you don't do anything on error, catch to avoid a console error.
        .catch((err) => {
            this.isLoggedOut = true;
        });
    }
  }
