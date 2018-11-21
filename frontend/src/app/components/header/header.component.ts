import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any;
  isLoggedIn = false;

  constructor(private router:Router, private auth: AuthService) {
  }

  ngOnInit() {
    this.auth.getAuthState().subscribe((user) => {
      this.user = user
      if(this.user){
        this.isLoggedIn = true;
      }else{
        this.isLoggedIn = false;
      }
    });
  }

  performLogout(){
    this.auth.logout().then(this.afterLogoutHook.bind(this),function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage)
    })
  }

  afterLogoutHook(){
    this.isLoggedIn = false
    this.router.navigateByUrl('/login')
  }

}
