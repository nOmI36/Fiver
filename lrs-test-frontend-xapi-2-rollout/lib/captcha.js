const config = require("../config");
const RecaptchaV2 = require("express-recaptcha").RecaptchaV2;

var recaptcha = new RecaptchaV2(config.recaptcha.siteKey, config.recaptcha.secretKey);

module.exports = {

	checkCaptcha: (onErrorRedirectPath) => (req, res, next) => {
		
		recaptcha.verify(req, (err, data) => {
			if (err) {
				res.redirect(onErrorRedirectPath);
			} else {
				delete req.body['g-recaptcha-response'];
				next();
			}
		});
	}
}