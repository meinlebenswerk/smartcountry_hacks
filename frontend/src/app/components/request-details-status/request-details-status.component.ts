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

  dataUpdateHandler(data){
    this.data = data
    this.updateComponent_now()
  }

  updateComponent_now(){
    //HACK: call the update now!
    this.changeDetectorRef.detectChanges();
  }

}
