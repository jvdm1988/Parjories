import { Component, OnInit } from '@angular/core';
import  { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  fullNameValue;
  emailValue;
  passwordValue;

  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
    this.auth.checklogin()
      .then(() => {
        console.log("Logged in already. Leave.")
      })
      .catch(() => {
        console.log("Welcome to signup :)")
      })
  }

  doSignUp () {
    this.auth.signup(this.fullNameValue, this.emailValue, this.passwordValue)
      .then((user) => {
        console.log(user);
        console.log("Sign up sucessful!")
      })
      .catch((err) => {
        console.log(err);
        console.log("You bad.")
      });
  }

  doLogin () {
    alert('login')
  }

}
