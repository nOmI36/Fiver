const mongoose = require("mongoose");
const models = require("../../lib/ODM/models");
const userHelpers = require("../../lib/helpers/users");

const { expect } = require("chai");

const testDB = "__TEST_DB__";

describe("User Helper Functions", function () {
    const username = "TestUserThatDoesntExist_9381273001287";
    const password = "1234";

    const email = username + "@fake-email.gov";
    const emailUnused = username + "@fake-email.gov.fake";

    let verifyCode = "";
    const verifyCodeUnused = "__123";

    before(async function () {
        await mongoose.connect(`mongodb://localhost:27017/${testDB}`);
        await models.user.findOneAndDelete({ email });
    });

    after(async function () {
        await mongoose.disconnect();
    });

    it("Should create an unverified user", async function () {
        const user = await userHelpers.createUnverifiedUser(
            email,
            username,
            password
        );

        expect(user).to.not.be.null;
        expect(user.verifiedEmail).to.be.false;

        verifyCode = user.verifyCode;
    });

    it("Should get a user by the verify code", async function () {
        const user = await userHelpers.getUserWithVerifyCode(verifyCode);

        expect(user).to.not.be.null;
        expect(user.verifyCode).to.not.equal("");
    });

    it("Should get a null user for an unused verify code", async function () {
        const user = await userHelpers.getUserWithVerifyCode(verifyCodeUnused);

        expect(user).to.be.null;
    });

    it("Should get a user by the email address", async function () {
        const user = await userHelpers.getUserWithEmail(email);

        expect(user).to.not.be.null;
        expect(user.email).to.equal(email);
    });

    it("Should get a null user if the email doesn't match anything", async function () {
        const user = await userHelpers.getUserWithEmail(emailUnused);

        expect(user).to.be.null;
    });
});

