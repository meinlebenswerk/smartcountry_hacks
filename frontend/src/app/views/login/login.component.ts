import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) {

  }
  ngOnInit() {

  }

  login() {
    document.getElementById('loading-ring').style.display = 'inline-block';
    setTimeout(() => {this.performLogin()}, 10);
  }

  performLogin(){
    firebase.auth().signInWithEmailAndPassword("john.doe@email.com", "password").then(() => {
      this.router.navigateByUrl('/home-dynamic')
      //this.userdataservice.isUserLoggedIn.next(true);
    },function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    }

}
