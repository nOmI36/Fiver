module.exports = {
	host: process.env.HOSTED_URL,
	email_user: process.env.EMAIL_USER,
	email_from: process.env.EMAIL_USER,
	email_pass: process.env.EMAIL_PASSWORD,
	email_server: process.env.EMAIL_SERVER,
	email_verifier: process.env.EMAIL_VERIFIER,
	admin_email: process.env.ADMIN_USER,
	admin_pass: process.env.ADMIN_PASSWORD,
	number_of_test_suites: process.env.TEST_SUITE_LIMIT,

	security: {
		allowUnsafeUrls: process.env.ALLOW_UNSAFE_URLS,
	},

	suite: {
		mainVersion: "1.0.3",
		pilotVersion: "2.0.0",
		versions: [
			"1.0.3",
			"2.0.0"
		]
	},

	mongo: {
		db: (process.env.MONGO_DB || "XAPITestServer"),
		host: (process.env.MONGO_HOST || "localhost"),
	},

	recaptcha: {
		siteKey: (process.env.RECAPTCHA_SITE_KEY || "your-site-key"),
		secretKey: (process.env.RECAPTCHA_SECRET_KEY || "your-secret-key")
	},

	// should be an HTTPS URL for maximum security
	sig_issuer: 'https://localhost:3000',
	sig_private_key: __dirname+'/DO_NOT_USE.pem',
	sig_public_key: __dirname+'/DO_NOT_USE.pub.pem',

	debug: true,
	disableAccountCreation:false 
}
