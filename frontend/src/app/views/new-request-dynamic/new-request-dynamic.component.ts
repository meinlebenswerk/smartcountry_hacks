//hack to use external cdn lib
declare var SignaturePad: any;


import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import external_data from './requestTypes.json'

import { AngularFireDatabase } from '@angular/fire/database';
import * as firebase from 'firebase/app';

import { AuthService } from './../../services/auth.service';


@Component({
  selector: 'app-new-request-dynamic',
  templateUrl: './new-request-dynamic.component.html',
  styleUrls: ['./new-request-dynamic.component.scss']
})
export class NewRequestDynamicComponent implements OnInit {

  possibleRequests : any[];
  questionData : any[];
  dataModel: any;
  selectedCategory: number = 0;

  user: any;

  signaturePad: any;
  canvas: any;

  constructor(private router:Router, private auth: AuthService, public db: AngularFireDatabase) { }

  ngOnInit() {
    //load selector values::
    this.possibleRequests = external_data.rdata;
    this.questionData = external_data.qdata

    this.dataModel = []

    this.auth.getAuthState().subscribe((user) => {
      this.user = user
      if(this.user){
        this.loadPersonalData()
      }
    });

    setTimeout(this.checkCanvas.bind(this),100);
  }

  loadPersonalData(){
    //this fn should get the actual user data from firebase/database
    //Placeholder method :)

    let userdata = { name: "John Doe", birthday: "1992-08-12", address: "Kurzhauser Str. 39, 10414 Berlin"}

    //populate the dataModel::
    this.dataModel = [userdata.name, userdata.birthday, userdata.address, userdata.address]

    return userdata;
  }

  isSelected(selection: string): boolean {
    return (<HTMLSelectElement>document.getElementById('select-category')).value === selection;
  }

  getSelectedQuestionName(){
    return this.possibleRequests[this.selectedCategory].type
  }

  resizeCanvas() {
    var ratio =  Math.max(window.devicePixelRatio || 1, 1);
    this.canvas.width = this.canvas.offsetWidth * ratio;
    this.canvas.height = this.canvas.offsetHeight * ratio;
    this.canvas.getContext("2d").scale(ratio, ratio);
    this.signaturePad.clear(); // otherwise isEmpty() might return incorrect value
  }

  checkCanvas(){
    this.canvas = document.getElementById("sign-canvas");
    this.signaturePad = new SignaturePad(this.canvas);

    window.addEventListener("resize", this.resizeCanvas.bind(this));
    this.resizeCanvas();
  }

  submitButtonListener(){
    let data = {
      name        : this.dataModel[0],
      birthday    : this.dataModel[1],
      address     : this.dataModel[2],
      old_address : this.dataModel[3]
    }

    let user_request = {
      uid: this.user.uid,
      date: Date.now(),
      attached_documents: [data],
      state: "In Bearbeitung",
      type: this.getSelectedQuestionName(),
      request_id: "0",
      office: "Berlin Mitte",
      contact: {name: "Frau Ines Müller", telephone: "03055223344"},
      additional_info: ""
    }

    /*push(value: T)*/

    let path = 'users/'+this.user.uid+'/requests';

    //push a new request and get the id.
    this.db.list(path).push({}).then( (data) => {
      user_request.request_id = data.key;
      this.db.list(path).update(data.key,user_request).then( (data)=> { this.router.navigateByUrl('/home-dynamic');})
    });



  }

}
