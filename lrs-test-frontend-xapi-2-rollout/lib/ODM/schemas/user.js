var mongoose = require('mongoose');
var utils = require("../../utils/utils.js");
var CryptoJS = require("../../utils/pbkdf2.js").CryptoJS;
var config = require("../../../config").config;
var userSchema = mongoose.Schema({
    username: String,
    passwordHash: String,
    email:{
    	type: String,
    	index: true
    },
    verifiedEmail: Boolean,
    salt: String,
    verifyCode: String,
    passwordResetKey: String,
    mustResetPassword: Boolean,
    uuid: String,
    _modified: Number
});

userSchema.methods.checkPassword = function(plaintext)
{
	if(this.passwordHash == utils.hashPassword(this.username,this.salt,plaintext))
	{
		return true;
	}
	return false;
}

userSchema.methods.checkResetKey = function(plaintext)
{
    //NOTE. We store the plaintext of the reset key. Should we hash it? If we do, we can't tell the user what it was manually
    if(this.passwordResetKey == plaintext)
    {
        return true;
    }
    return false;
}

userSchema.methods.forgotPassword = function(plaintext)
{
    this.passwordResetKey = CryptoJS.lib.WordArray.random(128 / 8).toString();
    this.save();
}

userSchema.methods.resetPassword = function(plaintext)
{
    this.salt = CryptoJS.lib.WordArray.random(128 / 8).toString();
    this.passwordHash = utils.hashPassword(this.username,this.salt,plaintext);

    //NOTE: we reset this to an unguessable number, rather then null or undefined as you might expect
    //this is because there is a greater risk of a bug allowing null or undefined to be submitted as the password at login
    //which would then look like a correct reset attempt. (becasue the user logged in with the temp reset key, which was null)
    //this is much safer, as no bug is going to accidently send this exact value

    this.mustResetPassword = false;
    this.passwordResetKey = CryptoJS.lib.WordArray.random(128 / 8).toString();
    this.save();
}
exports.user = userSchema;