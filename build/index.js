"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var app = (0, express_1.default)();
var port = 3000;
app.use('/api', routes_1.default);
app.listen(port, function () { return console.log("listening on http://localhost:".concat(port, "/api/imageprocessing?width=500&height=500 !")); });
exports.default = app;
