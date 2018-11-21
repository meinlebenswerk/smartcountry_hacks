import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';

import { AuthService } from './../../services/auth.service';

@Component({
  selector: 'app-request-details-status',
  templateUrl: './request-details-status.component.html',
  styleUrls: ['./request-details-status.component.scss']
})
export class RequestDetailsStatusComponent implements OnInit {

  data: any;
  user: any;

  firstUpdate: boolean = true;

  constructor(private changeDetectorRef: ChangeDetectorRef, private router:Router, private auth: AuthService, public db: AngularFireDatabase) { }

  ngOnInit() {
    this.data = {}

    this.auth.getAuthState().subscribe((user) => {
      this.user = user
      if(this.user){
        this.loadData()
      }
    });

  }

  loadData(){
    const urlParams = new URLSearchParams(window.location.search);
    const req_id = urlParams.get('request-id');

    let path = 'users/'+this.user.uid+'/requests/'+req_id

    this.db.object(path).valueChanges().subscribe(this.dataUpdateHandler.bind(this))
  }

  sendNotification(text){
    if(text === ""){
      return;
    }
    let note = new Notification(text)
  }

  dataUpdateHandler(data){
    if(!this.firstUpdate){
      let updateString = "";
      if(data.state != this.data.state){
        updateString += `Neuer Status fuer ${data.type} (ID: ${data.request_id}): ${data.state} \n`
      }
      this.sendNotification(updateString)
    }else{
      this.firstUpdate = false
    }

    this.data = data
    this.updateComponent_now()
  }

  updateComponent_now(){
    //HACK: call the update now!
    this.changeDetectorRef.detectChanges();
  }

}
