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
    setTimeout(() => {this.goToNextPage()}, 1000);
  }

  goToNextPage() {
    this.router.navigate(['/home']);
  }

}
