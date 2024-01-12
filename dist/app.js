"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));
//middleware

var app = (0, _express["default"])();
app.set("port", process.env.PORT || 3000);

//middleware
app.use((0, _cors["default"])());
app.use((0, _morgan["default"])("dev"));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
})); //permite peticiones desde HTML

app.get("/", function (req, res) {
  res.json({
    message: "esta es mi api"
  });
});
app.use("/api/tasks", _tasks["default"]);
var _default = exports["default"] = app;