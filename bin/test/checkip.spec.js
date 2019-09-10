"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var chai_1 = require("chai");
var checkip_1 = require("../src/checkip");
// "oldtest": "./node_modules/.bin/mocha ts-node/register ./test/*.spec.ts",
describe("openFileYES", function () {
    it("should open file", function (done) {
        var database_file = "bin/IP2PROXY-LITE-PX1.BIN";
        checkip_1.openFile(database_file)
            .then(function (res) {
            chai_1.assert.equal(res, "it works", "Value should be it works");
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
describe("openFileNO", function () {
    it("should not open file", function (done) {
        var database_file = "asd";
        checkip_1.openFile(database_file)
            .then(function () {
            throw new Error("Cant open file");
        })
            .catch(function (err) {
            chai_1.assert.isDefined(err);
            done();
        });
    });
});
describe("isProxyYES", function () {
    it("should be a proxy", function (done) {
        var ip = "213.100.168.84";
        checkip_1.isProxy(ip)
            .then(function (res) {
            chai_1.assert.equal(res, "it works", "Value should be it works");
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
describe("isProxyNO", function () {
    it("should not be a proxy", function (done) {
        var ip = "1.1.1.1";
        checkip_1.isProxy(ip)
            .then(function () {
            done(new Error("Is not a proxy"));
        })
            .catch(function (err) {
            chai_1.assert.isDefined(err);
            done();
        });
    });
});
describe("dropIpYES", function () {
    it("should be dropped", function (done) {
        var ip = "127.0.0.1";
        checkip_1.dropIp(ip)
            .then(function (result) {
            chai_1.assert.equal(result, "it works", "Value should be it works");
            done();
        })
            .catch(function (err) {
            done(err);
        });
    });
});
describe("dropIpNO", function () {
    it("should not be dropped", function (done) {
        var ip = "127.0.0.1";
        checkip_1.dropIp(ip)
            .then(function () {
            throw new Error("Cant drop ip");
        })
            .catch(function (err) {
            chai_1.assert.isDefined(err);
            done();
        });
    });
});
describe("onError", function () {
    it("should be an error", function (done) {
        chai_1.assert.isBoolean(checkip_1.onError("error"));
        done();
    });
});
//# sourceMappingURL=checkip.spec.js.map