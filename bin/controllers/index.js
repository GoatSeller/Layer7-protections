"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checkip_1 = require("../checkip");
var index = function (req, res) {
    var ip = req.connection.remoteAddress;
    typeof ip === undefined
        ? console.log("[ERROR] Invalid IP")
        : res.send("IP: " + ip);
    checkip_1.checkIp(ip);
};
exports.default = index;
//# sourceMappingURL=index.js.map