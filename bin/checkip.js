"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var openfile_1 = __importDefault(require("./utils/openfile"));
var isproxy_1 = __importDefault(require("./utils/isproxy"));
var dropip_1 = __importDefault(require("./utils/dropip"));
var onerror_1 = __importDefault(require("./utils/onerror"));
exports.database_file = 'IP2PROXY.BIN';
exports.checkIp = function (ip) {
    openfile_1.default(exports.database_file)
        .then(function () {
        isproxy_1.default(ip)
            .then(function () {
            dropip_1.default(ip)
                .then(function () {
                console.log('Success');
                return true;
            })
                .catch(onerror_1.default);
        })
            .catch(onerror_1.default);
    })
        .catch(onerror_1.default);
};
//# sourceMappingURL=checkip.js.map