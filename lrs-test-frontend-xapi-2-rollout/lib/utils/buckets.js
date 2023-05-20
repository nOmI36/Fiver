const mongodb = require("mongodb");

const createBucketWrapper = (db) => {
    const bucket = new mongodb.GridFSBucket(db);

    async function readFileText(filename) {
        const stream = bucket.openDownloadStreamByName(filename);
        stream.read();

        return new Promise((resolve, reject) => {
            const chunks = [];

            stream.on("data", (data) => chunks.push(data));
            stream.on("end", () => {
                const filedata = Buffer.concat(chunks);
                resolve(filedata);
            });

            stream.on("error", (err) => reject(err));
        });
    }

    return {
        readFileText,

        readFile: async (filename) => {
            const filetext = await readFileText(filename);
            return JSON.parse(filetext);
        },

        writeFile: async (filename, obj) => {
            const stream = bucket.openUploadStream(filename);
            const objBuffer = Buffer.from(JSON.stringify(obj));

            stream.write(objBuffer);
            stream.end();

            return new Promise((resolve, reject) => {
                stream.on("finish", resolve);
                stream.on("error", reject);
            });
        },

        deleteFile: async (filename) => {
            const docs = await bucket.find({ filename }).toArray();
            if (docs.length == 0) {
                console.warn(
                    `>> Tried to delete file with name ${filename}, but no file exists.`
                );
                return;
            }

            const deletionPromises = docs.map((doc) => bucket.delete(doc._id));
            return Promise.all(deletionPromises);
        }
    };
};

module.exports = {
    createBucketWrapper
};
