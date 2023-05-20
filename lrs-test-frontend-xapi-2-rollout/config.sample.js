module.exports = {
	host: "the external address used to get to this app. used for email links",
	email_from:"the 'FROM' email to be used for email",
	email_user:"the user account to use for email",
	// Note: on Office 365, the User and the From email must be the same!
	email_pass:"the password for that user",
	email_server:"smtp.gmail.com",
	admin_email:"admin@lrstest.gov",
	admin_pass:"password",
	number_of_test_suites:214,

	suite: {
		mainVersion: "1.0.3",
		pilotVersion: "2.0.0",
		versions: [
			"1.0.3",
			"2.0.0"
		]
	},

	mongo: {
		db: "XAPITestServer",
		host: "localhost"
	},

	recaptcha: {
		siteKey: "your-site-key",
		secretKey: "your-secret-key"
	},

	// should be an HTTPS URL for maximum security
	sig_issuer: 'https://localhost:3000',
	sig_private_key: __dirname+'/DO_NOT_USE.pem',
	sig_public_key: __dirname+'/DO_NOT_USE.pub.pem',

	debug: true,
	disableAccountCreation:false 
}
