const mongodb = require("mongodb");
const { createBucketWrapper } = require("../../lib/utils/buckets");

const { expect } = require("chai");

describe("GridFSBucket Wrapper", function () {
    const client = new mongodb.MongoClient("mongodb://localhost:27017");
    const appDb = new mongodb.Db(client, "Testing-Buckets");

    const bucket = createBucketWrapper(appDb);

    after(async function () {
        await client.close();
    });

    it("Should store and retrieve a basic object", async function () {
        const initialObj = {
            a: "Some Property",
            b: {
                c: Math.random()
            }
        };

        const filename = "test-obj";

        await bucket.writeFile(filename, initialObj);
        const recoveredObj = await bucket.readFile(filename);

        expect(initialObj).to.not.equal(recoveredObj);
        expect(initialObj).to.eql(recoveredObj);
    });
});

