var dealSMS = require('./sms.js');
var dealEMAIL = require('./email.js');

// Initialize firebase
var Firebase = require('firebase');

var listRef = new Firebase('https://cheapcheep.firebaseio.com/user_list');
listRef.on('mickeyho92@gmail.com', function(snapshot) {
  if(snapshot.val() === null) {
    alert('User julie does not exist.');
  } else {
    var email = snapshot.val().email;
    var email = snapshot.val().email;
    alert('The e-mail is: ' + email + ' and phone is ' + phone + ' keywords are ' + array);
  }
});


