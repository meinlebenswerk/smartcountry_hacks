import {Component, OnInit} from '@angular/core';
import {Location} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoginScreen = true;

  constructor(location:Location, router:Router) {
    router.events.subscribe((val) => {
      this.isLoginScreen = location.path().includes('login');
    });
  }

  ngOnInit() {

  }

}
