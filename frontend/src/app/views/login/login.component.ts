import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  user = null;
  //
  constructor(private router:Router, private auth: AuthService) {}

  ngOnInit() {
    this.auth.getAuthState().subscribe( (user) => this.user = user);
  }

  login() {
    document.getElementById('loading-ring').style.display = 'inline-block';
    setTimeout(this.performLogin.bind(this), 100);
  }

  performLogin(){
    this.auth.loginWithEmail().then(() => {

      Notification.requestPermission().then(function(result) {
      });

      this.router.navigateByUrl('/home-dynamic');

    },function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    })
  }

}
