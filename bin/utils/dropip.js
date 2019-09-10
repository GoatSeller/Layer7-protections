"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var exec = require('child_process').exec;
var dropIp = function (ip) {
    return new Promise(function (resolve, reject) {
        exec('iptables -A INPUT -s ' + ip + ' -j DROP', function (result, err) {
            err ? reject(new Error('Cant drop ip')) : resolve('it works');
        });
    });
};
exports.default = dropIp;
//# sourceMappingURL=dropip.js.map