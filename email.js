module.exports = function email(){

	var sendgrid  = require('sendgrid')(process.env.SENDGRID_USER, process.env.SENDGRID_KEY);
	sendgrid.send({
	  to: 'mickeyho92@gmail.com',
	  from: 'dealflagger@gmail.com',
	  subject: 'Hello World',
	  text: 'My first email through SendGrid'
	}, function(success, message) {
	  if (!success) {
	    console.log(message);
	  }
	});
}