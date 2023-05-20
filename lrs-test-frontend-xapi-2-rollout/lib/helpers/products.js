const productModel = require("../ODM/models").product;

const helperFunctions = {
    getProductFromUUID: async (uuid) => {
        try {
            return await productModel.findOne({ uuid: uuid });
        } catch (err) {
            return null;
        }
    },
};

module.exports = helperFunctions;
