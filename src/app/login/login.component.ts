import { Component, OnInit } from '@angular/core';
import  { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fullNameValue;
  emailValue;
  passwordValue;
  loginEmail;
  loginPassword;
  isLoggedOut: boolean = false;
  loginErrorMessage: string;
  errorMessage: string;


  constructor(
    private auth: AuthService,
    private routerThang: Router
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      // If success, we are logged in.
      .then((resultFromApi) => {
          this.routerThang.navigate(['/']);
      })

      // Even if you don't do anything on error, catch to avoid a console error.
      .catch((err) => {
      this.isLoggedOut = true;
 });
  }

  doSignUp () {
    this.auth.signup(this.fullNameValue, this.emailValue, this.passwordValue)
    .then((resultFromApi) => {
            // clear form
            this.fullNameValue = "";
            this.emailValue = "";
            this.passwordValue = "";

            // clear error message
            this.errorMessage = "";

            // redirect to /camels
            this.routerThang.navigate(['/']);
        })
        .catch((err) => {
            const parsedError = err.json();
            this.errorMessage = parsedError.message;
        });
    } // close doSignUp()

  doLogin() {
    this.auth.login(this.loginEmail, this.loginPassword)
      .then((resultFromApi) => {
          // clear the form
          this.loginEmail = "";
          this.loginPassword = "";

          // clear the error message
          this.loginErrorMessage = "";

          // redirect to /camels
          this.routerThang.navigate(['/']);
      })
      .catch((err) => {
          const parsedError = err.json();
          this.loginErrorMessage = parsedError.message;
      });
  } // close doLogin()

}
