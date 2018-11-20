import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home-dynamic.component.html',
  styleUrls: ['./home-dynamic.component.scss']
})
export class HomeDynamicComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.data = [{type:"Bitte warten",status:"Daten werden geladen..."}]
    //let thisComponent = this;
    //get data from the interwebs :)
    let user = firebase.auth().currentUser
    if(user){
      //get the data :)
      this.initUserRequests();
    }else{
      this.requestData = [{type:"Error :/",date:"-",status:"Bitte melden sie sich an",id:""}]
    }

    //this.initUserRequests();

  }

  initUserRequests() {
    let thisComponent = this;
    var user = firebase.auth().currentUser

    thisComponent.requestData = [{type:"Bitte warten.",date:"-",status:"Daten werden geladen",id:""}]

    var baseRef = firebase.app().database().ref();
    var usersRef = baseRef.child('users');

    var userRef = usersRef.child(user.uid);

    //reformat the data from Firebase in an JS object/array :)
    var requests = userRef.child('requests').once('value').then((snap) => {
      let data = snap.val();
      let dataWithKeys = Object.keys(data).map((key) => {
         var obj = data[key];
         obj._key = key;
         return obj;
      });

      //translate all the dates.
      var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      for(let i=0;i<dataWithKeys.length;i++){
        dataWithKeys[i].date = new Date(dataWithKeys[i].date).toLocaleDateString('de-DE', options);
      }

      thisComponent.requestData = dataWithKeys;
  })

    //firebase.auth().signOut()
  }

}
