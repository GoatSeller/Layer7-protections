"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var openfile_1 = __importDefault(require("./utils/openfile"));
var isproxy_1 = __importDefault(require("./utils/isproxy"));
var dropip_1 = __importDefault(require("./utils/dropip"));
var onerror_1 = __importDefault(require("./utils/onerror"));
var database_file = "IP2PROXY-LITE-PX1.BIN";
var Either_1 = require("fp-ts/lib/Either");
var pipeable_1 = require("fp-ts/lib/pipeable");
exports.checkIp = function (ip) {
    openfile_1.default(database_file)
        .then(function () {
        isproxy_1.default(ip)
            .then(function () {
            dropip_1.default(ip)
                .then(function (e) {
                pipeable_1.pipe(e, Either_1.fold(function (err) { return err; }, function (x) { return x; }));
            })
                .catch(onerror_1.default);
        })
            .catch(onerror_1.default);
    })
        .catch(onerror_1.default);
};
//# sourceMappingURL=checkip.js.map