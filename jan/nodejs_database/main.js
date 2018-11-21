var firebase = require('firebase');

//abc
/*
"john.doe@email.com"
"password"
*/

firebase.initializeApp({
  apiKey: "AIzaSyBZnCFC6kt79vYROHStlhdTWWVHOrpITdQ",
  appName: "smartcountry-n12_push",
  authDomain: "smartcountry-n12.firebaseapp.com",
  databaseURL: "https://smartcountry-n12.firebaseio.com",
  storageBucket: "smartcountry-n12.appspot.com"
});

//create user::
//firebase.auth().createUserWithEmailAndPassword("john.doe@email.com", "password");


//"sign in"
firebase.auth().signInWithEmailAndPassword("john.doe@email.com", "password").then( ()=>{
  var user = firebase.auth().currentUser
  console.log(user.uid)

  //push the request::
  /*let request = {
    uid: user.uid,
    date: Date.now(),
    attached_documents: ["870939328","2198639826"],
    state: "In Bearbeitung",
    type: "Ausweisbeantragung",
    request_id: (Math.floor(Math.random() * 8999)+1000) + "",
    office: "Berlin Mitte",
    contact: {name: "Frau Ines Müller", telephone: 03055223344},
    additional_info: ""
  }*/

  var baseRef = firebase.app().database().ref();
  var usersRef = baseRef.child('users');

  // Create a new ref and log it’s push key
  var userRef = usersRef.child(user.uid);

  //do this if we have a new user:
  userRef.push({full_name: "John Doe",birthday: Date.parse("12.08.1992"), birthplace: "Berlin"})

  /*
  var requestRef = userRef.child('requests').push()
  request.request_id = requestRef.path.pieces_[requestRef.path.pieces_.length-1]
  requestRef.set(request)*/

  //firebase.auth().signOut()
})
/*
var config = {
    projectId: "smartcountry-n12",
    storageBucket: "smartcountry-n12.appspot.com",
    messagingSenderId: "709119497178"
  };
  //firebase.initializeApp(config)
*/
