"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip2proxy = require("ip2proxy-nodejs");
var isProxy = function (ip) {
    return new Promise(function (resolve, reject) {
        ip2proxy.isProxy(ip) === 1
            ? resolve("it works")
            : reject(new Error("Is not a proxy"));
    });
};
exports.default = isProxy;
//# sourceMappingURL=isproxy.js.map