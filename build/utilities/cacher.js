"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var path_1 = __importDefault(require("path"));
var fs_1 = __importDefault(require("fs"));
var cacher = function (req, res, next) {
    if (fs_1.default.existsSync("thumbnails/encenadport_".concat(req.query.width, "_").concat(req.query.height, ".jpg"))) {
        res.status(200).sendFile(path_1.default.resolve("thumbnails/encenadport_".concat(req.query.width, "_").concat(req.query.height, ".jpg")));
    }
    else {
        next();
    }
};
exports.default = cacher;
