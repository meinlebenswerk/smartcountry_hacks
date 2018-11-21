import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home-dynamic.component.html',
  styleUrls: ['./home-dynamic.component.scss']
})
export class HomeDynamicComponent implements OnInit {
  requestData: any[];
  user: any;

  constructor(private changeDetectorRef: ChangeDetectorRef, private router:Router, private auth: AuthService, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.requestData = [{type:"Bitte warten",status:"Daten werden geladen..."}]

    //register a firebase auth listener -> this is used to get data
    //this.initUserRequests();

    this.auth.getAuthState().subscribe((user) => {
      this.user = user
      if(this.user){
        this.initUserRequests()
      }
    });
    /*
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        localStorage.setItem('myPage.expectSignIn', '1')
        this.initUserRequests();
      } else {
        localStorage.removeItem('myPage.expectSignIn')
        this.requestData = [{type:"Error :/",date:"-",status:"Bitte melden sie sich an",id:""}]
        this.router.navigateByUrl('/login')
      }
    })
    */

  }

  initUserRequests() {
    let thisComponent = this;
    thisComponent.requestData = [{type:"Bitte warten.",date:"-",status:"Daten werden geladen",id:""}]

    let uid = this.user.uid

    //var ref = this.db.database().ref().child('users').child('uid')
    this.db.list('users/'+uid+'/requests').valueChanges().subscribe(this.requestDataUpdateHandler.bind(this))
  }

  requestDataUpdateHandler(data){
    //TODO: compare this data to our cached data -> notify!
    if(this.requestData){

    }else{

    }
    this.requestData = data;
    this.updateComponent_now();
  }

  updateComponent_now(){
    //HACK: call the update now!
    this.changeDetectorRef.detectChanges();
  }

}
