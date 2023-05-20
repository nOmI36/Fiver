const uuidv4 = require("uuid").v4;
const crypto = require("crypto");
const utils = require("../utils/utils");

const userModel = require("../ODM/models").user;

const helperFunctions = {
    getUserWithEmail: async (email) => {
        try {
            return await userModel.findOne({ email });
        } catch (err) {
            return null;
        }
    },

    getUserWithVerifyCode: async (verifyCode) => {
        try {
            return await userModel.findOne({ verifyCode });
        } catch (err) {
            return null;
        }
    },

    createUnverifiedUser: async (email, username, password) => {
        const newUser = new userModel();
        newUser.username = username;

        const randomSalt = crypto.randomBytes(16);
        newUser.salt = randomSalt.toString("hex");
        newUser.passwordHash = utils.hashPassword(
            newUser.username,
            newUser.salt,
            password
        );
        newUser.verifiedEmail = false;
        newUser.email = email;

        newUser.verifyCode = crypto.randomBytes(16).toString("hex");
        newUser.uuid = uuidv4();

        try {
            await newUser.save();
            return newUser;
        } catch (err) {
            return null;
        }
    }
};

module.exports = helperFunctions;

