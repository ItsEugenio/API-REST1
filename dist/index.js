"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _app = _interopRequireDefault(require("./app"));
require("./database");
_app["default"].listen(_app["default"].get('port'));
console.log('carga en el puerto', _app["default"].get('port'));