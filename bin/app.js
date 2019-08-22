"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var checkip_1 = require("./checkip");
var check = new checkip_1.Check();
var app = express_1.default();
app.get('/', function (req, res) {
    var ip = req.connection.remoteAddress;
    if (typeof ip === undefined) {
        console.log('[ERROR] Invalid IP');
    }
    else {
        res.send('IP: ' + ip);
    }
    check.checkIp(ip);
});
app.listen(8080, '0.0.0.0', function () {
    console.log('Server started');
});
