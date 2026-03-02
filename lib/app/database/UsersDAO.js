"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.UsersDAO = void 0;
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var _Users = require("../models/Users");
var mysql = _interopRequireWildcard(require("mysql"));
var util = _interopRequireWildcard(require("util"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator.return && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, catch: function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }
var UsersDAO = /*#__PURE__*/function () {
  function UsersDAO(host, port, username, password) {
    (0, _classCallCheck2.default)(this, UsersDAO);
    (0, _defineProperty2.default)(this, "host", "localhost");
    (0, _defineProperty2.default)(this, "port", 3306);
    (0, _defineProperty2.default)(this, "username", "root");
    (0, _defineProperty2.default)(this, "password", "root");
    (0, _defineProperty2.default)(this, "schema", "safety");
    (0, _defineProperty2.default)(this, "pool", this.initDbConnection());
    //Set all class properties
    this.host = host;
    this.port = port;
    this.username = username;
    this.password = password;
    this.pool = this.initDbConnection();
  }
  (0, _createClass2.default)(UsersDAO, [{
    key: "initDbConnection",
    value: function initDbConnection() {
      return mysql.createPool({
        host: this.host,
        user: this.username,
        port: this.port,
        password: this.password,
        database: this.schema,
        connectionLimit: 10
      });
    }
  }, {
    key: "findUserById",
    value: function findUserById(userId, callback) {
      var user = [];

      //get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee$(_context) {
            while (1) switch (_context.prev = _context.next) {
              case 0:
                //release connection in the pool
                connection.release();
                //Throw err if an error
                if (!err) {
                  _context.next = 3;
                  break;
                }
                throw err;
              case 3:
                //Use Promisfy Util to make an async function and run query to get a specific user
                connection.query = util.promisify(connection.query);
                _context.next = 6;
                return connection.query('SELECT * FROM USERS WHERE id=?', [userId]);
              case 6:
                result1 = _context.sent;
                console.log(result1);

                //throw an error if an error
                if (!err) {
                  _context.next = 10;
                  break;
                }
                throw err;
              case 10:
                //loop through results and return all users by id
                for (x = 0; x < result1.length; ++x) {
                  user.push(new _Users.Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
                }
                //return list of users
                callback(user);
              case 12:
              case "end":
                return _context.stop();
            }
          }, _callee);
        }));
        return function (_x, _x2) {
          return _ref.apply(this, arguments);
        };
      }());
    }

    //CRUD method to find all users
  }, {
    key: "findAllUsers",
    value: function findAllUsers(callback) {
      //list of users to return
      var user = [];
      //get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref2 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee2$(_context2) {
            while (1) switch (_context2.prev = _context2.next) {
              case 0:
                if (!err) {
                  _context2.next = 2;
                  break;
                }
                throw err;
              case 2:
                //Use Promisfy Util to make an async function and run query to get all users
                connection.query = util.promisify(connection.query);
                _context2.next = 5;
                return connection.query('SELECT * FROM USERS');
              case 5:
                result1 = _context2.sent;
                //release connection in the pool
                connection.release();

                //Throw err if an error
                if (!err) {
                  _context2.next = 9;
                  break;
                }
                throw err;
              case 9:
                //loop through results and get all users
                for (x = 0; x < result1.length; ++x) {
                  user.push(new _Users.Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
                }
                //return data

                callback(user);
              case 11:
              case "end":
                return _context2.stop();
            }
          }, _callee2);
        }));
        return function (_x3, _x4) {
          return _ref2.apply(this, arguments);
        };
      }());
    }

    //CRUD method to find a user by firstname 
  }, {
    key: "findByFirstName",
    value: function findByFirstName(search, callback) {
      //list of users to return
      var user = [];
      //get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref3 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee3$(_context3) {
            while (1) switch (_context3.prev = _context3.next) {
              case 0:
                if (!err) {
                  _context3.next = 2;
                  break;
                }
                throw err;
              case 2:
                //Use Promisfy Util to make an async function and run query to get all users
                connection.query = util.promisify(connection.query);
                _context3.next = 5;
                return connection.query('SELECT * FROM USERS WHERE firstname LIKE "%%" ', [search]);
              case 5:
                result1 = _context3.sent;
                //release connection in the pool
                connection.release();

                //Throw err if an error
                if (!err) {
                  _context3.next = 9;
                  break;
                }
                throw err;
              case 9:
                //loop through results and get all users
                for (x = 0; x < result1.length; ++x) {
                  user.push(new _Users.Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
                }
                callback(user);
              case 11:
              case "end":
                return _context3.stop();
            }
          }, _callee3);
        }));
        return function (_x5, _x6) {
          return _ref3.apply(this, arguments);
        };
      }());
    }

    //CRUD method to find a user by lastname 
  }, {
    key: "findByLastName",
    value: function findByLastName(search, callback) {
      //list of users to return
      var user = [];
      //get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4(err, connection) {
          var result1, x;
          return _regeneratorRuntime().wrap(function _callee4$(_context4) {
            while (1) switch (_context4.prev = _context4.next) {
              case 0:
                if (!err) {
                  _context4.next = 2;
                  break;
                }
                throw err;
              case 2:
                //Use Promisfy Util to make an async function and run query to get all users
                connection.query = util.promisify(connection.query);
                _context4.next = 5;
                return connection.query('SELECT * FROM users WHERE lastname LIKE "%%" ', [search]);
              case 5:
                result1 = _context4.sent;
                //release connection in the pool
                connection.release();

                //Throw err if an error
                if (!err) {
                  _context4.next = 9;
                  break;
                }
                throw err;
              case 9:
                //loop through results and get all users
                for (x = 0; x < result1.length; ++x) {
                  user.push(new _Users.Users(result1[x].id, result1[x].firstname, result1[x].lastname, result1[x].username, result1[x].password, result1[x].email, result1[x].phonenumber));
                }
                callback(user);
              case 11:
              case "end":
                return _context4.stop();
            }
          }, _callee4);
        }));
        return function (_x7, _x8) {
          return _ref4.apply(this, arguments);
        };
      }());
    }

    //CRUD method to create a user 
  }, {
    key: "createUser",
    value: function createUser(user, callback) {
      //get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref5 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5(err, connection) {
          var result1, userID;
          return _regeneratorRuntime().wrap(function _callee5$(_context5) {
            while (1) switch (_context5.prev = _context5.next) {
              case 0:
                //release connection in the pool
                connection.release();
                //throw an error if an err
                if (!err) {
                  _context5.next = 3;
                  break;
                }
                throw err;
              case 3:
                //Use Promisfy Util to make an async function and run query to get all users
                connection.query = util.promisify(connection.query);
                _context5.next = 6;
                return connection.query('INSERT INTO users (firstname, lastname, username, password, email, phonenumber) VALUES (?,?,?,?,?,?)', [user.FirstName, user.LastName, user.UserName, user.Password, user.Email, user.PhoneNumber]);
              case 6:
                result1 = _context5.sent;
                if (result1.affectedRows != 1) callback(-1);
                userID = result1.insertId;
                console.log(userID);
                callback(userID);
              case 11:
              case "end":
                return _context5.stop();
            }
          }, _callee5);
        }));
        return function (_x9, _x10) {
          return _ref5.apply(this, arguments);
        };
      }());
    }

    //CRUD method to create a user 
  }, {
    key: "updateUser",
    value: function updateUser(user, callback) {
      //get pooled database connection and run queries
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref6 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee6(err, connection) {
          var result1, userId;
          return _regeneratorRuntime().wrap(function _callee6$(_context6) {
            while (1) switch (_context6.prev = _context6.next) {
              case 0:
                //release connection in the pool
                connection.release();
                //throw an error if an err
                if (!err) {
                  _context6.next = 3;
                  break;
                }
                throw err;
              case 3:
                //Use Promisfy Util to make an async function and run query to get all users

                connection.query = util.promisify(connection.query);
                _context6.next = 6;
                return connection.query('UPDATE users SET firstname=?, lastname=?, username=?, password=?, email=?, phonenumber=? WHERE id=?', [user.FirstName, user.LastName, user.UserName, user.Password, user.Email, user.PhoneNumber, user.Id]);
              case 6:
                result1 = _context6.sent;
                if (result1.affectedRows != 1) callback(-1);
                userId = result1.insertId;
                callback(userId);
              case 10:
              case "end":
                return _context6.stop();
            }
          }, _callee6);
        }));
        return function (_x11, _x12) {
          return _ref6.apply(this, arguments);
        };
      }());
    }
    //CRUD method to delete an album
  }, {
    key: "deleteUser",
    value: function deleteUser(userId, callback) {
      //Get a pooled connection to the database, run the query to delete an album
      this.pool.getConnection( /*#__PURE__*/function () {
        var _ref7 = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regeneratorRuntime().mark(function _callee7(err, connection) {
          var result1;
          return _regeneratorRuntime().wrap(function _callee7$(_context7) {
            while (1) switch (_context7.prev = _context7.next) {
              case 0:
                connection.release();
                //thow an error if an error
                if (!err) {
                  _context7.next = 3;
                  break;
                }
                throw err;
              case 3:
                //use promisfy util to make an async function to delete an Album
                connection.query = util.promisify(connection.query);
                _context7.next = 6;
                return connection.query('DELETE FROM users WHERE ID=?', [userId]);
              case 6:
                result1 = _context7.sent;
                if (result1.affectedRows != 1) callback(-1);
              case 8:
              case "end":
                return _context7.stop();
            }
          }, _callee7);
        }));
        return function (_x13, _x14) {
          return _ref7.apply(this, arguments);
        };
      }());
      callback(userId);
    }
  }]);
  return UsersDAO;
}();
exports.UsersDAO = UsersDAO;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfVXNlcnMiLCJyZXF1aXJlIiwibXlzcWwiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsInV0aWwiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJub2RlSW50ZXJvcCIsIldlYWtNYXAiLCJjYWNoZUJhYmVsSW50ZXJvcCIsImNhY2hlTm9kZUludGVyb3AiLCJvYmoiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsImRlZmF1bHQiLCJjYWNoZSIsImhhcyIsImdldCIsIm5ld09iaiIsImhhc1Byb3BlcnR5RGVzY3JpcHRvciIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yIiwia2V5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiZGVzYyIsInNldCIsIl9yZWdlbmVyYXRvclJ1bnRpbWUiLCJleHBvcnRzIiwiT3AiLCJoYXNPd24iLCJ2YWx1ZSIsIiRTeW1ib2wiLCJTeW1ib2wiLCJpdGVyYXRvclN5bWJvbCIsIml0ZXJhdG9yIiwiYXN5bmNJdGVyYXRvclN5bWJvbCIsImFzeW5jSXRlcmF0b3IiLCJ0b1N0cmluZ1RhZ1N5bWJvbCIsInRvU3RyaW5nVGFnIiwiZGVmaW5lIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiZXJyIiwid3JhcCIsImlubmVyRm4iLCJvdXRlckZuIiwic2VsZiIsInRyeUxvY3NMaXN0IiwicHJvdG9HZW5lcmF0b3IiLCJHZW5lcmF0b3IiLCJnZW5lcmF0b3IiLCJjcmVhdGUiLCJjb250ZXh0IiwiQ29udGV4dCIsIm1ha2VJbnZva2VNZXRob2QiLCJ0cnlDYXRjaCIsImZuIiwiYXJnIiwidHlwZSIsIkNvbnRpbnVlU2VudGluZWwiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiSXRlcmF0b3JQcm90b3R5cGUiLCJnZXRQcm90byIsImdldFByb3RvdHlwZU9mIiwiTmF0aXZlSXRlcmF0b3JQcm90b3R5cGUiLCJ2YWx1ZXMiLCJHcCIsImRlZmluZUl0ZXJhdG9yTWV0aG9kcyIsImZvckVhY2giLCJtZXRob2QiLCJfaW52b2tlIiwiQXN5bmNJdGVyYXRvciIsIlByb21pc2VJbXBsIiwiaW52b2tlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlY29yZCIsInJlc3VsdCIsIl9fYXdhaXQiLCJ0aGVuIiwidW53cmFwcGVkIiwiZXJyb3IiLCJwcmV2aW91c1Byb21pc2UiLCJjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyIsInN0YXRlIiwiRXJyb3IiLCJkb25lUmVzdWx0IiwiZGVsZWdhdGUiLCJkZWxlZ2F0ZVJlc3VsdCIsIm1heWJlSW52b2tlRGVsZWdhdGUiLCJzZW50IiwiX3NlbnQiLCJkaXNwYXRjaEV4Y2VwdGlvbiIsImFicnVwdCIsImRvbmUiLCJtZXRob2ROYW1lIiwidW5kZWZpbmVkIiwicmV0dXJuIiwiVHlwZUVycm9yIiwiaW5mbyIsInJlc3VsdE5hbWUiLCJuZXh0IiwibmV4dExvYyIsInB1c2hUcnlFbnRyeSIsImxvY3MiLCJlbnRyeSIsInRyeUxvYyIsImNhdGNoTG9jIiwiZmluYWxseUxvYyIsImFmdGVyTG9jIiwidHJ5RW50cmllcyIsInB1c2giLCJyZXNldFRyeUVudHJ5IiwiY29tcGxldGlvbiIsInJlc2V0IiwiaXRlcmFibGUiLCJpdGVyYXRvck1ldGhvZCIsImlzTmFOIiwibGVuZ3RoIiwiaSIsImRpc3BsYXlOYW1lIiwiaXNHZW5lcmF0b3JGdW5jdGlvbiIsImdlbkZ1biIsImN0b3IiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJtYXJrIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJhd3JhcCIsImFzeW5jIiwiUHJvbWlzZSIsIml0ZXIiLCJrZXlzIiwidmFsIiwib2JqZWN0IiwicmV2ZXJzZSIsInBvcCIsInNraXBUZW1wUmVzZXQiLCJwcmV2IiwiY2hhckF0Iiwic2xpY2UiLCJzdG9wIiwicm9vdFJlY29yZCIsInJ2YWwiLCJleGNlcHRpb24iLCJoYW5kbGUiLCJsb2MiLCJjYXVnaHQiLCJoYXNDYXRjaCIsImhhc0ZpbmFsbHkiLCJmaW5hbGx5RW50cnkiLCJjb21wbGV0ZSIsImZpbmlzaCIsImNhdGNoIiwiX2NhdGNoIiwidGhyb3duIiwiZGVsZWdhdGVZaWVsZCIsIlVzZXJzREFPIiwiaG9zdCIsInBvcnQiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiX2NsYXNzQ2FsbENoZWNrMiIsIl9kZWZpbmVQcm9wZXJ0eTIiLCJpbml0RGJDb25uZWN0aW9uIiwicG9vbCIsIl9jcmVhdGVDbGFzczIiLCJjcmVhdGVQb29sIiwidXNlciIsImRhdGFiYXNlIiwic2NoZW1hIiwiY29ubmVjdGlvbkxpbWl0IiwiZmluZFVzZXJCeUlkIiwidXNlcklkIiwiY2FsbGJhY2siLCJnZXRDb25uZWN0aW9uIiwiX3JlZiIsIl9hc3luY1RvR2VuZXJhdG9yMiIsIl9jYWxsZWUiLCJjb25uZWN0aW9uIiwicmVzdWx0MSIsIngiLCJfY2FsbGVlJCIsIl9jb250ZXh0IiwicmVsZWFzZSIsInF1ZXJ5IiwicHJvbWlzaWZ5IiwiY29uc29sZSIsImxvZyIsIlVzZXJzIiwiaWQiLCJmaXJzdG5hbWUiLCJsYXN0bmFtZSIsImVtYWlsIiwicGhvbmVudW1iZXIiLCJfeCIsIl94MiIsImFwcGx5IiwiYXJndW1lbnRzIiwiZmluZEFsbFVzZXJzIiwiX3JlZjIiLCJfY2FsbGVlMiIsIl9jYWxsZWUyJCIsIl9jb250ZXh0MiIsIl94MyIsIl94NCIsImZpbmRCeUZpcnN0TmFtZSIsInNlYXJjaCIsIl9yZWYzIiwiX2NhbGxlZTMiLCJfY2FsbGVlMyQiLCJfY29udGV4dDMiLCJfeDUiLCJfeDYiLCJmaW5kQnlMYXN0TmFtZSIsIl9yZWY0IiwiX2NhbGxlZTQiLCJfY2FsbGVlNCQiLCJfY29udGV4dDQiLCJfeDciLCJfeDgiLCJjcmVhdGVVc2VyIiwiX3JlZjUiLCJfY2FsbGVlNSIsInVzZXJJRCIsIl9jYWxsZWU1JCIsIl9jb250ZXh0NSIsIkZpcnN0TmFtZSIsIkxhc3ROYW1lIiwiVXNlck5hbWUiLCJQYXNzd29yZCIsIkVtYWlsIiwiUGhvbmVOdW1iZXIiLCJhZmZlY3RlZFJvd3MiLCJpbnNlcnRJZCIsIl94OSIsIl94MTAiLCJ1cGRhdGVVc2VyIiwiX3JlZjYiLCJfY2FsbGVlNiIsIl9jYWxsZWU2JCIsIl9jb250ZXh0NiIsIklkIiwiX3gxMSIsIl94MTIiLCJkZWxldGVVc2VyIiwiX3JlZjciLCJfY2FsbGVlNyIsIl9jYWxsZWU3JCIsIl9jb250ZXh0NyIsIl94MTMiLCJfeDE0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vYXBwL2RhdGFiYXNlL1VzZXJzREFPLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFVzZXJzIH0gZnJvbSBcIi4uL21vZGVscy9Vc2Vyc1wiO1xyXG5cclxuLy9NeVNRTCBNb2R1bGUgZGVwZW5kZW5jeVxyXG5pbXBvcnQgKiBhcyBteXNxbCBmcm9tIFwibXlzcWxcIjtcclxuLy9VdGlsIE1vZHVsZSBkZXBlbmRlbmN5XHJcbmltcG9ydCAqIGFzIHV0aWwgZnJvbSBcInV0aWxcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2Vyc0RBT1xyXG57XHJcbiAgICBwcml2YXRlIGhvc3Q6IHN0cmluZyA9IFwibG9jYWxob3N0XCI7XHJcbiAgICBwcml2YXRlIHBvcnQ6bnVtYmVyID0gMzMwNjtcclxuICAgIHByaXZhdGUgdXNlcm5hbWU6IHN0cmluZz0gXCJyb290XCI7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkOnN0cmluZz0gXCJyb290XCI7XHJcbiAgICBwcml2YXRlIHNjaGVtYTpzdHJpbmc9IFwic2FmZXR5XCI7XHJcbiAgICBwdWJsaWMgcG9vbCA9IHRoaXMuaW5pdERiQ29ubmVjdGlvbigpO1xyXG5cclxuXHJcbiAgICBwcml2YXRlIGluaXREYkNvbm5lY3Rpb24oKTogYW55XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG15c3FsLmNyZWF0ZVBvb2woe1xyXG4gICAgICAgICAgICBob3N0OiB0aGlzLmhvc3QsXHJcbiAgICAgICAgICAgIHVzZXI6IHRoaXMudXNlcm5hbWUsXHJcbiAgICAgICAgICAgIHBvcnQ6IHRoaXMucG9ydCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHRoaXMucGFzc3dvcmQsXHJcbiAgICAgICAgICAgIGRhdGFiYXNlOiB0aGlzLnNjaGVtYSxcclxuICAgICAgICAgICAgY29ubmVjdGlvbkxpbWl0OiAxMFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgXHJcblxyXG5cclxuICAgIGNvbnN0cnVjdG9yKGhvc3Q6IHN0cmluZywgcG9ydDogbnVtYmVyLCB1c2VybmFtZTogc3RyaW5nLCBwYXNzd29yZDogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIC8vU2V0IGFsbCBjbGFzcyBwcm9wZXJ0aWVzXHJcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcclxuICAgICAgICB0aGlzLnBvcnQgPSBwb3J0O1xyXG4gICAgICAgIHRoaXMudXNlcm5hbWUgPSB1c2VybmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgICAgICAgdGhpcy5wb29sID0gdGhpcy5pbml0RGJDb25uZWN0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGZpbmRVc2VyQnlJZCh1c2VySWQ6IG51bWJlciwgY2FsbGJhY2s6IGFueSlcclxuICAgIHtcclxuICAgICAgICBsZXQgdXNlcjogVXNlcnNbXSA9IFtdO1xyXG5cclxuICAgICAgICAvL2dldCBwb29sZWQgZGF0YWJhc2UgY29ubmVjdGlvbiBhbmQgcnVuIHF1ZXJpZXNcclxuICAgICAgICB0aGlzLnBvb2wuZ2V0Q29ubmVjdGlvbihhc3luYyBmdW5jdGlvbihlcnI6IGFueSwgY29ubmVjdGlvbjogYW55KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy9yZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcbiAgICAgICAgICAgLy9UaHJvdyBlcnIgaWYgYW4gZXJyb3JcclxuICAgICAgICAgICAgaWYoZXJyKSB0aHJvdyBlcnI7XHJcblxyXG4gICAgICAgICAgICAvL1VzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYSBzcGVjaWZpYyB1c2VyXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KVxyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ1NFTEVDVCAqIEZST00gVVNFUlMgV0hFUkUgaWQ9PycsIFt1c2VySWRdKVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQxKTtcclxuICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgIC8vdGhyb3cgYW4gZXJyb3IgaWYgYW4gZXJyb3JcclxuICAgICAgICAgICAgIGlmIChlcnIpIHRocm93IGVyclxyXG4gICAgICAgICAgICAvL2xvb3AgdGhyb3VnaCByZXN1bHRzIGFuZCByZXR1cm4gYWxsIHVzZXJzIGJ5IGlkXHJcbiAgICAgICAgICAgIGZvcihsZXQgeCA9IDA7IHggPCByZXN1bHQxLmxlbmd0aDsgKyt4KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB1c2VyLnB1c2gobmV3IFVzZXJzKHJlc3VsdDFbeF0uaWQsIHJlc3VsdDFbeF0uZmlyc3RuYW1lLCByZXN1bHQxW3hdLmxhc3RuYW1lLCByZXN1bHQxW3hdLnVzZXJuYW1lLCByZXN1bHQxW3hdLnBhc3N3b3JkLCByZXN1bHQxW3hdLmVtYWlsLCByZXN1bHQxW3hdLnBob25lbnVtYmVyKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy9yZXR1cm4gbGlzdCBvZiB1c2Vyc1xyXG4gICAgICAgICAgICBjYWxsYmFjayh1c2VyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgXHJcbiAgICAvL0NSVUQgbWV0aG9kIHRvIGZpbmQgYWxsIHVzZXJzXHJcbiAgICBwdWJsaWMgZmluZEFsbFVzZXJzKGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgLy9saXN0IG9mIHVzZXJzIHRvIHJldHVyblxyXG4gICAgICAgIGxldCB1c2VyOiBVc2Vyc1tdID0gW107XHJcbiAgICAgICAgLy9nZXQgcG9vbGVkIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHJ1biBxdWVyaWVzXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjogYW55KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdGhyb3cgYW4gZXJyb3IgaWYgYW4gZXJyXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICAgICAvL1VzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpXHJcbiAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVTRVJTJyk7XHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgLy9yZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAvL1Rocm93IGVyciBpZiBhbiBlcnJvclxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggcmVzdWx0cyBhbmQgZ2V0IGFsbCB1c2Vyc1xyXG4gICAgICAgICAgICBmb3IobGV0IHg9MDsgeCA8IHJlc3VsdDEubGVuZ3RoOyArK3gpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdXNlci5wdXNoKG5ldyBVc2VycyhyZXN1bHQxW3hdLmlkLCByZXN1bHQxW3hdLmZpcnN0bmFtZSwgcmVzdWx0MVt4XS5sYXN0bmFtZSwgcmVzdWx0MVt4XS51c2VybmFtZSwgcmVzdWx0MVt4XS5wYXNzd29yZCwgcmVzdWx0MVt4XS5lbWFpbCwgcmVzdWx0MVt4XS5waG9uZW51bWJlcikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vcmV0dXJuIGRhdGFcclxuICAgICAgICAgICBcclxuICAgICAgICAgICAgY2FsbGJhY2sodXNlcik7XHJcblxyXG4gICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAvL0NSVUQgbWV0aG9kIHRvIGZpbmQgYSB1c2VyIGJ5IGZpcnN0bmFtZSBcclxuICAgIHB1YmxpYyBmaW5kQnlGaXJzdE5hbWUoc2VhcmNoOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgLy9saXN0IG9mIHVzZXJzIHRvIHJldHVyblxyXG4gICAgICAgIGxldCB1c2VyOiBVc2Vyc1tdID0gW107XHJcbiAgICAgICAgLy9nZXQgcG9vbGVkIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHJ1biBxdWVyaWVzXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjogYW55KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdGhyb3cgYW4gZXJyb3IgaWYgYW4gZXJyXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICAgICAvL1VzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpXHJcbiAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIFVTRVJTIFdIRVJFIGZpcnN0bmFtZSBMSUtFIFwiJSVcIiAnLCBbc2VhcmNoXSk7XHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgLy9yZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcclxuICAgICAgICAgICAgY29ubmVjdGlvbi5yZWxlYXNlKCk7XHJcblxyXG4gICAgICAgICAgICAvL1Rocm93IGVyciBpZiBhbiBlcnJvclxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuICAgICAgICAgICAgLy9sb29wIHRocm91Z2ggcmVzdWx0cyBhbmQgZ2V0IGFsbCB1c2Vyc1xyXG4gICAgICAgICAgICBmb3IobGV0IHg9MDsgeCA8IHJlc3VsdDEubGVuZ3RoOyArK3gpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHVzZXIucHVzaChuZXcgVXNlcnMocmVzdWx0MVt4XS5pZCwgcmVzdWx0MVt4XS5maXJzdG5hbWUsIHJlc3VsdDFbeF0ubGFzdG5hbWUsIHJlc3VsdDFbeF0udXNlcm5hbWUsIHJlc3VsdDFbeF0ucGFzc3dvcmQsIHJlc3VsdDFbeF0uZW1haWwsIHJlc3VsdDFbeF0ucGhvbmVudW1iZXIpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjYWxsYmFjayh1c2VyKTtcclxuXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ1JVRCBtZXRob2QgdG8gZmluZCBhIHVzZXIgYnkgbGFzdG5hbWUgXHJcbiAgICBwdWJsaWMgZmluZEJ5TGFzdE5hbWUoc2VhcmNoOiBzdHJpbmcsIGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgLy9saXN0IG9mIHVzZXJzIHRvIHJldHVyblxyXG4gICAgICAgIGxldCB1c2VyOiBVc2Vyc1tdID0gW107XHJcbiAgICAgICAgLy9nZXQgcG9vbGVkIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHJ1biBxdWVyaWVzXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjogYW55KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vdGhyb3cgYW4gZXJyb3IgaWYgYW4gZXJyXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG5cclxuICAgICAgICAgICAvL1VzZSBQcm9taXNmeSBVdGlsIHRvIG1ha2UgYW4gYXN5bmMgZnVuY3Rpb24gYW5kIHJ1biBxdWVyeSB0byBnZXQgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgY29ubmVjdGlvbi5xdWVyeSA9IHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpXHJcbiAgICAgICAgICAgbGV0IHJlc3VsdDEgPSBhd2FpdCBjb25uZWN0aW9uLnF1ZXJ5KCdTRUxFQ1QgKiBGUk9NIHVzZXJzIFdIRVJFIGxhc3RuYW1lIExJS0UgXCIlJVwiICcsIFtzZWFyY2hdKTtcclxuICAgICAgICAgICB7XHJcblxyXG4gICAgICAgICAgICAvL3JlbGVhc2UgY29ubmVjdGlvbiBpbiB0aGUgcG9vbFxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgICAgIC8vVGhyb3cgZXJyIGlmIGFuIGVycm9yXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAvL2xvb3AgdGhyb3VnaCByZXN1bHRzIGFuZCBnZXQgYWxsIHVzZXJzXHJcbiAgICAgICAgICAgIGZvcihsZXQgeD0wOyB4IDwgcmVzdWx0MS5sZW5ndGg7ICsreClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdXNlci5wdXNoKG5ldyBVc2VycyhyZXN1bHQxW3hdLmlkLCByZXN1bHQxW3hdLmZpcnN0bmFtZSwgcmVzdWx0MVt4XS5sYXN0bmFtZSwgcmVzdWx0MVt4XS51c2VybmFtZSwgcmVzdWx0MVt4XS5wYXNzd29yZCwgcmVzdWx0MVt4XS5lbWFpbCwgcmVzdWx0MVt4XS5waG9uZW51bWJlcikpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHVzZXIpO1xyXG5cclxuICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgLy9DUlVEIG1ldGhvZCB0byBjcmVhdGUgYSB1c2VyIFxyXG4gICAgcHVibGljIGNyZWF0ZVVzZXIodXNlcjogVXNlcnMsIGNhbGxiYWNrOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy9nZXQgcG9vbGVkIGRhdGFiYXNlIGNvbm5lY3Rpb24gYW5kIHJ1biBxdWVyaWVzXHJcbiAgICAgICAgdGhpcy5wb29sLmdldENvbm5lY3Rpb24oYXN5bmMgZnVuY3Rpb24oZXJyOmFueSwgY29ubmVjdGlvbjogYW55KSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vcmVsZWFzZSBjb25uZWN0aW9uIGluIHRoZSBwb29sXHJcbiAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAvL3Rocm93IGFuIGVycm9yIGlmIGFuIGVyclxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgLy9Vc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZ2V0IGFsbCB1c2Vyc1xyXG4gICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KVxyXG4gICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnSU5TRVJUIElOVE8gdXNlcnMgKGZpcnN0bmFtZSwgbGFzdG5hbWUsIHVzZXJuYW1lLCBwYXNzd29yZCwgZW1haWwsIHBob25lbnVtYmVyKSBWQUxVRVMgKD8sPyw/LD8sPyw/KScsIFxyXG4gICAgICAgICAgIFt1c2VyLkZpcnN0TmFtZSwgdXNlci5MYXN0TmFtZSwgdXNlci5Vc2VyTmFtZSwgdXNlci5QYXNzd29yZCwgdXNlci5FbWFpbCwgdXNlci5QaG9uZU51bWJlcl0pO1xyXG4gICAgICAgICAgIHtcclxuICAgICAgICAgICBpZihyZXN1bHQxLmFmZmVjdGVkUm93cyAhPSAxKVxyXG4gICAgICAgICAgIGNhbGxiYWNrKC0xKVxyXG4gICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgbGV0IHVzZXJJRCA9IHJlc3VsdDEuaW5zZXJ0SWQ7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHVzZXJJRCk7XHJcbiAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICBcclxuICAgICAgICAgICBjYWxsYmFjayh1c2VySUQpO1xyXG4gICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8vQ1JVRCBtZXRob2QgdG8gY3JlYXRlIGEgdXNlciBcclxuICAgIHB1YmxpYyB1cGRhdGVVc2VyKHVzZXI6IFVzZXJzLCBjYWxsYmFjazogYW55KVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vZ2V0IHBvb2xlZCBkYXRhYmFzZSBjb25uZWN0aW9uIGFuZCBydW4gcXVlcmllc1xyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjphbnksIGNvbm5lY3Rpb246IGFueSkgXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAgLy9yZWxlYXNlIGNvbm5lY3Rpb24gaW4gdGhlIHBvb2xcclxuICAgICAgICAgICAgIGNvbm5lY3Rpb24ucmVsZWFzZSgpO1xyXG4gICAgICAgICAgICAvL3Rocm93IGFuIGVycm9yIGlmIGFuIGVyclxyXG4gICAgICAgICAgICBpZihlcnIpIHRocm93IGVycjtcclxuXHJcbiAgICAgICAgICAgLy9Vc2UgUHJvbWlzZnkgVXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIGFuZCBydW4gcXVlcnkgdG8gZ2V0IGFsbCB1c2Vyc1xyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIGNvbm5lY3Rpb24ucXVlcnkgPSB1dGlsLnByb21pc2lmeShjb25uZWN0aW9uLnF1ZXJ5KVxyXG4gICAgICAgICAgIGxldCByZXN1bHQxID0gYXdhaXQgY29ubmVjdGlvbi5xdWVyeSgnVVBEQVRFIHVzZXJzIFNFVCBmaXJzdG5hbWU9PywgbGFzdG5hbWU9PywgdXNlcm5hbWU9PywgcGFzc3dvcmQ9PywgZW1haWw9PywgcGhvbmVudW1iZXI9PyBXSEVSRSBpZD0/JywgW3VzZXIuRmlyc3ROYW1lLCB1c2VyLkxhc3ROYW1lLCB1c2VyLlVzZXJOYW1lLCB1c2VyLlBhc3N3b3JkLCB1c2VyLkVtYWlsLCB1c2VyLlBob25lTnVtYmVyLCB1c2VyLklkXSk7XHJcblxyXG4gICAgICAgICAgIGlmKCByZXN1bHQxLmFmZmVjdGVkUm93cyAhPSAxKVxyXG4gICAgICAgICAgICBjYWxsYmFjaygtMSk7XHJcbiAgICAgICAgICAge1xyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxldCB1c2VySWQgPSByZXN1bHQxLmluc2VydElkO1xyXG5cclxuICAgICAgICAgICAgY2FsbGJhY2sodXNlcklkKTtcclxuXHJcbiAgICAgICAgICAgfVxyXG5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgLy9DUlVEIG1ldGhvZCB0byBkZWxldGUgYW4gYWxidW1cclxuICAgIHB1YmxpYyBkZWxldGVVc2VyKHVzZXJJZDogbnVtYmVyLCBjYWxsYmFjazogYW55KVxyXG4gICAge1xyXG4gICAgICAgIFxyXG4gICAgICAgIC8vR2V0IGEgcG9vbGVkIGNvbm5lY3Rpb24gdG8gdGhlIGRhdGFiYXNlLCBydW4gdGhlIHF1ZXJ5IHRvIGRlbGV0ZSBhbiBhbGJ1bVxyXG4gICAgICAgIHRoaXMucG9vbC5nZXRDb25uZWN0aW9uKGFzeW5jIGZ1bmN0aW9uKGVycjogYW55LCBjb25uZWN0aW9uOiBhbnkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnJlbGVhc2UoKTtcclxuICAgICAgICAgICAgLy90aG93IGFuIGVycm9yIGlmIGFuIGVycm9yXHJcbiAgICAgICAgICAgIGlmKGVycikgdGhyb3cgZXJyO1xyXG4gICAgICAgICAgICAgLy91c2UgcHJvbWlzZnkgdXRpbCB0byBtYWtlIGFuIGFzeW5jIGZ1bmN0aW9uIHRvIGRlbGV0ZSBhbiBBbGJ1bVxyXG4gICAgICAgICAgICBjb25uZWN0aW9uLnF1ZXJ5ID0gIHV0aWwucHJvbWlzaWZ5KGNvbm5lY3Rpb24ucXVlcnkpO1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0MSA9IGF3YWl0IGNvbm5lY3Rpb24ucXVlcnkoJ0RFTEVURSBGUk9NIHVzZXJzIFdIRVJFIElEPT8nLCBbdXNlcklkXSlcclxuICAgICAgICAgICAgaWYocmVzdWx0MS5hZmZlY3RlZFJvd3MgIT0gMSlcclxuICAgICAgICAgICAgY2FsbGJhY2soLTEpO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICB9KVxyXG4gICAgICAgIGNhbGxiYWNrKHVzZXJJZClcclxuICAgIH1cclxufVxyXG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLE1BQUEsR0FBQUMsT0FBQTtBQUdBLElBQUFDLEtBQUEsR0FBQUMsdUJBQUEsQ0FBQUYsT0FBQTtBQUVBLElBQUFHLElBQUEsR0FBQUQsdUJBQUEsQ0FBQUYsT0FBQTtBQUE2QixTQUFBSSx5QkFBQUMsV0FBQSxlQUFBQyxPQUFBLGtDQUFBQyxpQkFBQSxPQUFBRCxPQUFBLFFBQUFFLGdCQUFBLE9BQUFGLE9BQUEsWUFBQUYsd0JBQUEsWUFBQUEseUJBQUFDLFdBQUEsV0FBQUEsV0FBQSxHQUFBRyxnQkFBQSxHQUFBRCxpQkFBQSxLQUFBRixXQUFBO0FBQUEsU0FBQUgsd0JBQUFPLEdBQUEsRUFBQUosV0FBQSxTQUFB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