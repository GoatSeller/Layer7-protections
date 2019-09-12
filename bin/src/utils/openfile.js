"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ip2proxy = require('ip2proxy-nodejs');
var openFile = function (file) {
    return new Promise(function (resolve, reject) {
        ip2proxy.Open(file) === 0
            ? resolve('it works')
            : reject(new Error('Cant open file'));
    });
};
exports.default = openFile;
//# sourceMappingURL=openfile.js.map