import { Component, OnInit } from '@angular/core';
import  { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
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

}
