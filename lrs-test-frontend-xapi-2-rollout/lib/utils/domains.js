const ip = require("ip");
const config = require("../../config");

/**
 * Check if the goven hostname is a valid IP address.
 * @param {String} hostname 
 * @returns 
 */
function isIpAddress(hostname) {
    let expression = /^((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/g;
    let matches = expression.test(hostname);

    return matches;
}

/**
 * Tries to get a URL object for the given address.
 * @param {String} address 
 * @returns {URL}
 */
function tryGetUrl(address) {
    try {
        return new URL(address);
    }

    catch (err) {
        return undefined;
    }
}

/**
 * Check if this address is potentially unsafe.  Namely, it should not be anything private
 * or internal-only for networking.
 * @param {String} address 
 * @returns 
 */
function isSafeAddress(address) {

    if (config.security.allowUnsafeUrls)
        return true;

    let isHttp = address.startsWith("http://") || address.startsWith("https://");
    if (!isHttp)
        return false;

    let url = tryGetUrl(address);
    if (url == undefined)
        return false;

    let hostname = url.hostname;
    
    let isLocalhost = hostname == "localhost";
    if (isLocalhost)
        return false;

    let internalForAWS = hostname.endsWith(".internal") || hostname.startsWith("ip-");
    if (internalForAWS)
        return false;

    let isIp = isIpAddress(hostname);
    if (isIp) {

        let private = ip.isPrivate(hostname);
        if (private)
            return false;

        let ipV4 = ip.isV4Format(hostname);
        if (!ipV4)
            return false;
        
        let loopback = ip.isLoopback(hostname);
        if (loopback)
            return false;        
    }
    
    return true;
}

/**
 * Check if the given address is potentially unsafe.
 * @param {String | Undefined} address 
 * @returns {Boolean}
 */
function isUnsafeAddress(address) {
    return !isSafeAddress(address);
}

/**
 * Function that will produce a middleware block and check whether
 * the request has an unsafe address property on its payload.
 * @param {Function} getAddressFromRequest 
 * @returns 
 */
function validateSafeUrl(getAddressFromRequest) {
    return (req, res, next) => {
        
        let address = getAddressFromRequest(req);
        let looksUnsafe = isUnsafeAddress(address);
        
        if (looksUnsafe) {
            res.status(500).send("URL validation failed - this seems to be an unsafe URL.");
        }
        else {
            next();
        }
    }
}

module.exports = {
    isUnsafeAddress,
    validateSafeUrl
}
