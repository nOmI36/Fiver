const config = require("../../config");

const helperFunctions = {
    /**
    * Check if an LRS's configured version of xAPI is supported.
    * @param {String} version 
    * @returns Whether it's supported.
    */
    isVersionSupported: (version) => {
        let supportedVersions = config.suite.versions;
        let supported = supportedVersions.includes(version);

        return supported;
    },

    /**
    * Get an array of all supported xAPI versions.
    * @returns {string[]} All supported versions.
    */
    getSupportedVersions: () => {
        return [...config.suite.versions];
    }
}

module.exports = helperFunctions;
