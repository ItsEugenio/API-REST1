"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _dotenv = require("dotenv");
(0, _dotenv.config)();
var _default = exports["default"] = {
  mongodbURL: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/tasksapi'
};