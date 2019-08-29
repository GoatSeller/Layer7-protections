"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var checkip_1 = __importDefault(require("../checkip"));
exports.index = function (req, res) {
    var ip = req.connection.remoteAddress;
    typeof ip === undefined
        ? console.log("[ERROR] Invalid IP")
        : res.send("IP: " + ip);
    checkip_1.default(ip);
};
