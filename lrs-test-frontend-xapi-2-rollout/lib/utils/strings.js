exports.strings = {
	"unverified_login_ok": "You have not verified your email address. You should receive an email with an account activation link. <a href='/users/resendValidation'> Follow this link to activate your account. </a>",
	"already_verified":"You've already verified your email address",
	"validation_sent":"If this user exists, then a validation email has been sent to this address. <a href='/users/validateEmail'> Enter it here. </a> <br><br>If you do not receive an email, double-check that the email address you provided is associated with an account here.",
	"login_unvalidated":"This account's email address is not validated. Do you want to <a href='/users/resendValidation'> resend the validation email </a> or <a href='/users/validateEmail'> enter the code manually?</a>",
	"password_reset_sent":"An email has been sent to your address with instructions on how to reset your password. <a href='/users/login'> Log in with your temporary password. </a>",
	"user_exists":"A user with this email address already exists.",
	"verified_code_error":"This verification code is invalid. Do you want to <a href='/users/resendValidation'> resend the validation email? </a>",
	"forgot_password_email_subject":"Password reset notice",
	"validate_email_subject":"LRS Test account activation",
	"invalid_configuration":"invalid_configuration",
	"no_tests_in_progress":"There are no tests in progress. <a href='/tests/my'> View completed tests. </a> ",
	"no_test_records":"You have no test records.",
	"test_not_found":"Test not found",
	"not_authorized":"Not Authorized",
	"onlyOwnerCert":"Only the owner of the test can download the certificate.",
	"test_complete_subject":"Your LRS conformance test is complete.",
	"not_admin":"The administrator cannot create tests, products or LRS configs. The Admin cannot reset the admin password or delete the admin account. Edit the config file to change the admin login info."
}