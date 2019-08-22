"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip2proxy = require('ip2proxy-nodejs');
var file = 'IP2PROXY-LITE-PX4.BIN';
var exec = require('child_process').exec;
var Check = /** @class */ (function () {
    function Check() {
    }
    Check.prototype.checkIp = function (ip) {
        if (ip2proxy.Open(file) === 0) {
            if (ip2proxy.isProxy(ip) === 1) {
                exec('iptables -A INPUT -s ' + ip + ' -j DROP', function (err, stdout, stderr) {
                    if (err) {
                        throw '[ERROR]';
                    }
                    else {
                        return console.log(ip + ' DROPPED');
                    }
                });
            }
        }
        else {
            throw '[ERROR] File problems';
        }
    };
    return Check;
}());
exports.Check = Check;
