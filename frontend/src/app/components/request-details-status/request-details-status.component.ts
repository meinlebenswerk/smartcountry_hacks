import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-details-status',
  templateUrl: './request-details-status.component.html',
  styleUrls: ['./request-details-status.component.scss']
})
export class RequestDetailsStatusComponent implements OnInit {

  constructor(private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit() {
    this.data = {}

    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        localStorage.setItem('myPage.expectSignIn', '1')
        this.loadData();
      } else {
        localStorage.removeItem('myPage.expectSignIn')
        // Implement logic to trigger the login dialog here or redirect to sign-in page.
        // e.g. showDialog()
      }
    })
  }

  loadData(){
    const urlParams = new URLSearchParams(window.location.search);
    const req_id = urlParams.get('request-id');

    var user = firebase.auth().currentUser

    var baseRef = firebase.app().database().ref();
    var usersRef = baseRef.child('users');

    var requestRef = usersRef.child(user.uid).child('requests').child(req_id);

    //reformat the data from Firebase in an JS object/array :)
    var request = requestRef.once('value').then((snap) => {
      let data = snap.val();
      console.log(this)
      this.data = data;
    }).then(this.updateComponent_now.bind(this))

  }

  updateComponent_now(){
    //HACK: call the update now!
    this.changeDetectorRef.detectChanges();
  }

}
