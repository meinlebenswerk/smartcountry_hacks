const userid = "testuser";

var config = {
    apiKey: "AIzaSyBZnCFC6kt79vYROHStlhdTWWVHOrpITdQ",
    authDomain: "smartcountry-n12.firebaseapp.com",
    databaseURL: "https://smartcountry-n12.firebaseio.com",
    projectId: "smartcountry-n12",
    storageBucket: "smartcountry-n12.appspot.com",
    messagingSenderId: "709119497178"
  };
firebase.initializeApp(config);

//reference to the db service
var database = firebase.database();

//-> this of course should be secured :)
function submitUserRequest(uid, data) {

  var requestData = {
    uid: uid,
    data: data
  };

  // Since the requests are basically a list, get a new Key for the next request::
  var nextRequestKey = firebase.database().ref(`users/${uid}`).child('posts').push().key;

  // Write the new post's data simultaneously in the posts list and the user's post list.
  var updates = {};
  updates['/posts/' + newPostKey] = postData;
  updates['/user-posts/' + uid + '/' + newPostKey] = postData;

  return firebase.database().ref().update(updates);
}

//dynamically refresh the open requests::
function registerUserRequestListener(uid, callback){
  let userRequestReference = firebase.database.ref(`users/${uid}/requests`)

  //this calls hte callback on a "snapshot" value.
  userRequestReference.on('value', callback);
}
