"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateTask = exports.getAllTasks = exports.findOneTask = exports.findAllDoneTask = exports.deleteTask = exports.createTask = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _Tasks = _interopRequireDefault(require("../models/Tasks"));
var _getPagination2 = require("../libs/getPagination");
var getAllTasks = exports.getAllTasks = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$query, size, page, title, condition, _getPagination, limit, offset, data;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$query = req.query, size = _req$query.size, page = _req$query.page, title = _req$query.title;
          condition = title ? {
            title: {
              $regex: new RegExp(title),
              $options: "i"
            }
          } : {};
          _getPagination = (0, _getPagination2.getPagination)(page, size), limit = _getPagination.limit, offset = _getPagination.offset;
          _context.next = 6;
          return _Tasks["default"].paginate(condition, {
            offset: offset,
            limit: limit
          });
        case 6:
          data = _context.sent;
          res.json({
            totalItems: data.totalDocs,
            tasks: data.docs,
            totaslPages: data.totalPages,
            currentPage: data.page - 1
          });
          _context.next = 13;
          break;
        case 10:
          _context.prev = 10;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message || "Algo fallo al solicitar las tareas"
          });
        case 13:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 10]]);
  }));
  return function getAllTasks(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createTask = exports.createTask = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var newTask, taskSaved;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          if (req.body.title) {
            _context2.next = 2;
            break;
          }
          return _context2.abrupt("return", res.status(400).send({
            message: "El contenido no puede estas vacio"
          }));
        case 2:
          _context2.prev = 2;
          console.log(req.body);
          newTask = new _Tasks["default"]({
            title: req.body.title,
            description: req.body.description,
            done: req.body.done ? req.body.done : false
          });
          _context2.next = 7;
          return newTask.save();
        case 7:
          taskSaved = _context2.sent;
          res.json(taskSaved);
          _context2.next = 14;
          break;
        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](2);
          res.status(500).json({
            message: _context2.t0.message || "Algo fallo al crear la tarea"
          });
        case 14:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[2, 11]]);
  }));
  return function createTask(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var findOneTask = exports.findOneTask = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var id, task;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _context3.prev = 1;
          _context3.next = 4;
          return _Tasks["default"].findById(id);
        case 4:
          task = _context3.sent;
          if (task) {
            _context3.next = 7;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            massage: "La tarea con este id ".concat(id, " no existe")
          }));
        case 7:
          res.json(task);
          _context3.next = 13;
          break;
        case 10:
          _context3.prev = 10;
          _context3.t0 = _context3["catch"](1);
          res.status(500).json({
            message: _context3.t0.message || "Algo fallo al solicitar la tarea con el id ".concat(id)
          });
        case 13:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[1, 10]]);
  }));
  return function findOneTask(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteTask = exports.deleteTask = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var id;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return _Tasks["default"].findByIdAndDelete(req.params.id);
        case 4:
          res.json({
            message: "Tarea eliminida correctamente"
          });
          _context4.next = 10;
          break;
        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            message: _context4.t0.message || "Algo fallo al eliminar la tarea con el id ".concat(id)
          });
        case 10:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[1, 7]]);
  }));
  return function deleteTask(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var findAllDoneTask = exports.findAllDoneTask = /*#__PURE__*/function () {
  var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
    var tasks;
    return _regenerator["default"].wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _Tasks["default"].find({
            done: true
          });
        case 3:
          tasks = _context5.sent;
          res.json(tasks);
          _context5.next = 10;
          break;
        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.message || "Algo fallo al solicitar todas las tareas completadas"
          });
        case 10:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 7]]);
  }));
  return function findAllDoneTask(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var updateTask = exports.updateTask = /*#__PURE__*/function () {
  var _ref6 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(req, res) {
    return _regenerator["default"].wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _Tasks["default"].findByIdAndUpdate(req.params.id, req.body);
        case 3:
          res.json({
            message: "Tarea Actualizada correctamente"
          });
          _context6.next = 9;
          break;
        case 6:
          _context6.prev = 6;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: _context6.t0.message || "Algo fallo al actualizar la tarea con el id ".concat(id)
          });
        case 9:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 6]]);
  }));
  return function updateTask(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();