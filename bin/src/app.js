"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var controllers_1 = __importDefault(require("./controllers"));
var app = express_1.default();
app.get("/", controllers_1.default);
app.listen(8080, "0.0.0.0", function () {
    console.log("Server started");
});
//# sourceMappingURL=app.js.map