"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var _mongoosePaginateV = _interopRequireDefault(require("mongoose-paginate-v2"));
var taskSchema = new _mongoose.Schema({
  title: {
    type: String,
    require: true,
    trim: true //para quitar los espacios
  },
  description: {
    type: String,
    trim: true
  },
  done: {
    type: Boolean,
    "default": false
  }
}, {
  versionKey: false,
  timestamps: true //agrega el createAtt y updateAtt
});
taskSchema.plugin(_mongoosePaginateV["default"]);
var _default = exports["default"] = (0, _mongoose.model)('Task', taskSchema);