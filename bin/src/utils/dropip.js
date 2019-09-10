"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var exec = require("child_process").exec;
var TaskEither_1 = require("fp-ts/lib/TaskEither");
var util_1 = __importDefault(require("util"));
/*
const dropIp = (ip: string | undefined): Promise<any> =>
  new Promise<any>((resolve, reject) => {
    exec(
      "iptables -A INPUT -s " + ip + " -j DROP",
      (result: any, err: Error) => {
        err ? reject(new Error("Cant drop ip")) : resolve("it works");
      }
    );
  });
 */
// let ip = "1.1.1.1";
var dropIp = util_1.default.promisify(function (ip) {
    return TaskEither_1.tryCatch(function () {
        return new Promise(function (resolve) {
            return exec("iptables -A INPUT -s " + ip + " -j DROP", function () {
                resolve("it works");
            });
        });
    }, function (reason) { return new Error(String(reason)); });
});
exports.default = dropIp;
//# sourceMappingURL=dropip.js.map