"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip2proxy = require("ip2proxy-nodejs");
var database_file = "IP2PROXY-LITE-PX1.BIN";
var exec = require("child_process").exec;
exports.checkIp = function (ip) {
    exports.openFile(database_file)
        .then(function () {
        exports.isProxy(ip)
            .then(function () {
            exports.dropIp(ip)
                .then(function () {
                console.log("Ip dropped");
                return true;
            })
                .catch(exports.onError);
        })
            .catch(exports.onError);
    })
        .catch(exports.onError);
};
exports.openFile = function (file) {
    return new Promise(function (resolve, reject) {
        ip2proxy.Open(file) === 0
            ? resolve("it works")
            : reject(new Error("Cant open file"));
    });
};
exports.isProxy = function (ip) {
    return new Promise(function (resolve, reject) {
        ip2proxy.isProxy(ip) === 1
            ? resolve("it works")
            : reject(new Error("Is not a proxy"));
    });
};
exports.dropIp = function (ip) {
    return new Promise(function (resolve, reject) {
        exec("iptables -A INPUT -s " + ip + " -j DROP", function (result, err) {
            err ? reject(new Error("Cant drop ip")) : resolve("it works");
        });
    });
};
exports.onError = function (error) {
    console.error(error);
    return false;
};
//# sourceMappingURL=checkip.js.map