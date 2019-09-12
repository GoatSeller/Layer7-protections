"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var openfile_1 = __importDefault(require("../src/utils/openfile"));
var isproxy_1 = __importDefault(require("../src/utils/isproxy"));
var dropip_1 = __importDefault(require("../src/utils/dropip"));
var onerror_1 = __importDefault(require("../src/utils/onerror"));
describe('openFileYES', function () {
    it('should open file', function (done) {
        var database_file = 'bin/IP2PROXY-LITE-PX1.BIN';
        openfile_1.default(database_file)
            .then(function (res) {
            chai_1.assert.equal(res, 'it works', 'Value should be it works');
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
describe('openFileNO', function () {
    it('should not open file', function (done) {
        var database_file = 'asd';
        openfile_1.default(database_file)
            .then(function () {
            throw new Error('Cant open file');
        })
            .catch(function (err) {
            chai_1.assert.isDefined(err);
            done();
        });
    });
});
describe('isProxyYES', function () {
    it('should be a proxy', function (done) {
        var ip = '213.100.168.84';
        isproxy_1.default(ip)
            .then(function (res) {
            chai_1.assert.equal(res, 'it works', 'Value should be it works');
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
describe('isProxyNO', function () {
    it('should not be a proxy', function (done) {
        var ip = '1.1.1.1';
        isproxy_1.default(ip)
            .then(function () {
            done(new Error('Is not a proxy'));
        })
            .catch(function (err) {
            chai_1.assert.isDefined(err);
            done();
        });
    });
});
describe('dropIpYES', function () {
    it('should be dropped', function (done) {
        var ip = '127.0.0.1';
        dropip_1.default(ip)
            .then(function (result) {
            chai_1.assert.equal(result, 'it works', 'Value should be it works');
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
describe('dropIpNO', function () {
    it('should not be dropped', function (done) {
        var ip = '127.0.0.1';
        dropip_1.default(ip)
            .then(function () {
            throw new Error('Cant drop ip');
        })
            .catch(function (err) {
            chai_1.assert.isDefined(err);
            done();
        });
    });
});
describe('onError', function () {
    it('should be an error', function (done) {
        chai_1.assert.isBoolean(onerror_1.default('error'));
        done();
    });
});
//# sourceMappingURL=checkip.spec.js.map