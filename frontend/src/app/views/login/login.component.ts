import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  performLogin(){
    firebase.auth().signInWithEmailAndPassword("john.doe@email.com", "password").then( (error) =>{
      if(error){
        alert(error)
      }
    })
  }

}
