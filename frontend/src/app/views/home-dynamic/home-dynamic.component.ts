//This hack enables Chrome Notification fors Typescript.
declare var Notification: any;

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

  sendNotification(text){
    if(text === ""){
      return;
    }

    let note = new Notification(text)
  }

  requestDataUpdateHandler(data){
    //compare this data to our cached data -> notify!

    let updateString = "";
    if(data.length > this.requestData.length){
      console.log('new requests loaded successfully.')
      updateString += "Neuer Antrag wurde erfolgreich erstellt!"
    }else{
      //This is really bad hahaha -> just need to match keys. Should be okay for a demo though.
      for(let i=0;i<data.length;i++){
        for(let ii=0;ii<this.requestData.length;ii++){
          //order !
          if(data[i].request_id == this.requestData[ii].request_id){
            if(data[i].state != this.requestData[ii].state){
              updateString += `Neuer Status fuer ${data[i].type} (ID: ${data[i].request_id}): ${data[i].state} \n`
            }
            break;
          }
        }
      }
      this.sendNotification(updateString)
    }

    //format date :)
    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    for(let i=0;i<data.length;i++){
      data[i].date_formatted = new Date(data[i].date).toLocaleDateString('de-DE', options);
    }


    this.requestData = data;
    this.updateComponent_now();
  }

  updateComponent_now(){
    //HACK: call the update now!
    this.changeDetectorRef.detectChanges();
  }

}
