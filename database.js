var dealSMS = require('./sms.js');
var dealEMAIL = require('./email.js');
var dealCRAWLER = require('./crawler.js');

var USER_LIST_LOCATION = 'https://cheapcheep.firebaseio.com/user_list';
var EMAIL_INDEX = 'https://cheapcheep.firebaseio.com/email_index';
var PHONE_INDEX = 'https://cheapcheep.firebaseio.com/phone_index';
var KEYWORDS_INDEX = 'https://cheapcheep.firebaseio.com/keywords_index';
/*
// Initialize firebase
var Firebase = require('firebase');
var userList = new Firebase(USER_LIST_LOCATION);
var emailList = new Firebase(EMAIL_INDEX);
var phoneList = new Firebase(PHONE_INDEX);
var keywordsList = new Firebase(KEYWORDS_INDEX);

userList.once('child_added', function(snapshot) {
  var userID = snapshot.name(), userData = snapshot.val();
  emailList.child(userData.email).set({userID: userID});
  phoneList.child(userData.telephone).set({userID: userID});
});

userList.on('child_changed', function(snapshot) {
  var userID = snapshot.name(), userData = snapshot.val();
  for (var i = 0; i < userData.keywords.length; i++){
  	keywordsList.child(userData.keywords[i]).set({userID: userID});
  }
});
*/

dealSMS();