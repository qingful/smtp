const nodemailer = require('nodemailer');

function sendEmail(to, subject, html) {
	// create reusable transporter object using the default SMTP transport
	var transporter = nodemailer.createTransport({
		host: "127.0.0.1",
		port: 465,
		secure: false
	});

	// setup e-mail data with unicode symbols
	var mailOptions = {
		from: "x@a.com", // sender address
		to: to, // list of receivers
		subject: "subject", // Subject line
		text: "subject", // plaintext body
		html: "xxxx", // html body
		replyTo: to
	};

	// send mail with defined transport object
	transporter.sendMail(mailOptions, function(error, info) {
		if (error) {
			return console.log(error);
		}
		console.log("Message sent: " + info.response);
	});
}

sendEmail("786699892@qq.com", "xxx", "123");