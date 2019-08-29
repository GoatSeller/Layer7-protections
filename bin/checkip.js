"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip2proxy = require("ip2proxy-nodejs");
var file = "IP2PROXY-LITE-PX1.BIN";
var exec = require("child_process").exec;
var checkIp = function (ip) {
    openFile(file)
        .then(function () {
        isProxy(ip)
            .then(function () {
            dropIp(ip)
                .then(function () {
                console.log("Ip dropped");
                return true;
            })
                .catch(onError);
        })
            .catch(function () {
            console.log("Is not a proxy");
        });
    })
        .catch(onError);
};
var openFile = function (file) {
    return new Promise(function (resolve, reject) {
        ip2proxy.Open(file) === 0 ? resolve() : reject(new Error("Cant open file"));
    });
};
var isProxy = function (ip) {
    return new Promise(function (resolve, reject) {
        ip2proxy.isProxy(ip) === 1 ? resolve() : reject();
    });
};
var dropIp = function (ip) {
    return new Promise(function (resolve, reject) {
        exec("iptables -A INPUT -s " + ip + " -j DROP", function (result, err) {
            err ? resolve(result) : reject(new Error("Cant drop ip"));
        });
    });
};
var onError = function (error) {
    console.log(error);
    return false;
};
exports.default = checkIp;
