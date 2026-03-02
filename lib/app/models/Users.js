"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = void 0;
var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));
var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));
var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));
var Users = /*#__PURE__*/function () {
  function Users(id, firstName, lastName, userName, password, email, phoneNumber) {
    (0, _classCallCheck2.default)(this, Users);
    (0, _defineProperty2.default)(this, "id", -1);
    (0, _defineProperty2.default)(this, "firstName", "");
    (0, _defineProperty2.default)(this, "lastName", "");
    (0, _defineProperty2.default)(this, "userName", "");
    (0, _defineProperty2.default)(this, "password", "");
    (0, _defineProperty2.default)(this, "email", "");
    (0, _defineProperty2.default)(this, "phoneNumber", "");
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.userName = userName;
    this.password = password;
    this.email = email;
    this.phoneNumber = phoneNumber;
  }
  (0, _createClass2.default)(Users, [{
    key: "Users",
    value: function Users() {
      this.id;
      this.firstName;
      this.lastName;
      this.userName;
      this.password;
      this.email;
      this.phoneNumber;
    }
  }, {
    key: "Id",
    get: function get() {
      return this.id;
    },
    set: function set(id) {
      this.id = id;
    }
  }, {
    key: "FirstName",
    get: function get() {
      return this.firstName;
    },
    set: function set(firstName) {
      this.firstName = firstName;
    }
  }, {
    key: "LastName",
    get: function get() {
      return this.lastName;
    },
    set: function set(lastName) {
      this.lastName = lastName;
    }
  }, {
    key: "UserName",
    get: function get() {
      return this.userName;
    },
    set: function set(userName) {
      this.userName = userName;
    }
  }, {
    key: "Password",
    get: function get() {
      return this.password;
    },
    set: function set(password) {
      this.password = password;
    }
  }, {
    key: "Email",
    get: function get() {
      return this.email;
    },
    set: function set(email) {
      this.email = email;
    }
  }, {
    key: "PhoneNumber",
    get: function get() {
      return this.phoneNumber;
    },
    set: function set(phoneNumber) {
      this.phoneNumber = phoneNumber;
    }
  }]);
  return Users;
}();
exports.Users = Users;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVc2VycyIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJ1c2VyTmFtZSIsInBhc3N3b3JkIiwiZW1haWwiLCJwaG9uZU51bWJlciIsIl9jbGFzc0NhbGxDaGVjazIiLCJkZWZhdWx0IiwiX2RlZmluZVByb3BlcnR5MiIsIl9jcmVhdGVDbGFzczIiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInNldCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi8uLi9hcHAvbW9kZWxzL1VzZXJzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBVc2Vyc1xyXG57XHJcbiAgICBwcml2YXRlIGlkOiBudW1iZXIgPSAtMTtcclxuICAgIHByaXZhdGUgZmlyc3ROYW1lOiBTdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBsYXN0TmFtZTogU3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgdXNlck5hbWU6IFN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIHBhc3N3b3JkOiBTdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBlbWFpbDogU3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgcGhvbmVOdW1iZXI6IFN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoaWQ6IG51bWJlciwgZmlyc3ROYW1lOiBTdHJpbmcsIGxhc3ROYW1lOiBTdHJpbmcsIHVzZXJOYW1lOiBTdHJpbmcsIHBhc3N3b3JkOiBTdHJpbmcsIGVtYWlsOiBTdHJpbmcsIHBob25lTnVtYmVyOiBTdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lID0gZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgICAgICB0aGlzLnVzZXJOYW1lID0gdXNlck5hbWU7XHJcbiAgICAgICAgdGhpcy5wYXNzd29yZCA9IHBhc3N3b3JkO1xyXG4gICAgICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgICAgICB0aGlzLnBob25lTnVtYmVyID0gcGhvbmVOdW1iZXI7XHJcbiAgICB9XHJcbiAgIFxyXG4gICAgcHVibGljIFVzZXJzKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmlkO1xyXG4gICAgICAgIHRoaXMuZmlyc3ROYW1lO1xyXG4gICAgICAgIHRoaXMubGFzdE5hbWU7XHJcbiAgICAgICAgdGhpcy51c2VyTmFtZTtcclxuICAgICAgICB0aGlzLnBhc3N3b3JkO1xyXG4gICAgICAgIHRoaXMuZW1haWw7XHJcbiAgICAgICAgdGhpcy5waG9uZU51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgIGdldCBJZCgpOiBudW1iZXJcclxuICAge1xyXG4gICAgcmV0dXJuIHRoaXMuaWQ7XHJcbiAgIH1cclxuXHJcbiAgIHNldCBJZChpZDogbnVtYmVyKVxyXG4gICB7XHJcbiAgICAgdGhpcy5pZCA9IGlkO1xyXG4gICB9XHJcblxyXG4gICBnZXQgRmlyc3ROYW1lKCk6IFN0cmluZ1xyXG4gICB7XHJcbiAgICByZXR1cm4gdGhpcy5maXJzdE5hbWU7XHJcbiAgIH1cclxuICAgc2V0IEZpcnN0TmFtZShmaXJzdE5hbWU6IFN0cmluZylcclxuICAge1xyXG4gICAgdGhpcy5maXJzdE5hbWUgPSBmaXJzdE5hbWU7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBMYXN0TmFtZSgpOiBTdHJpbmdcclxuICAge1xyXG4gICAgcmV0dXJuIHRoaXMubGFzdE5hbWU7XHJcbiAgIH1cclxuICAgc2V0IExhc3ROYW1lKGxhc3ROYW1lOiBTdHJpbmcpXHJcbiAgIHtcclxuICAgIHRoaXMubGFzdE5hbWUgPSBsYXN0TmFtZTtcclxuICAgfVxyXG5cclxuICAgZ2V0IFVzZXJOYW1lKCk6IFN0cmluZ1xyXG4gICB7XHJcbiAgICByZXR1cm4gdGhpcy51c2VyTmFtZTtcclxuICAgfVxyXG4gICBzZXQgVXNlck5hbWUodXNlck5hbWU6IFN0cmluZylcclxuICAge1xyXG4gICAgdGhpcy51c2VyTmFtZSA9IHVzZXJOYW1lO1xyXG4gICB9XHJcblxyXG4gICBnZXQgUGFzc3dvcmQoKTogU3RyaW5nXHJcbiAgIHtcclxuICAgIHJldHVybiB0aGlzLnBhc3N3b3JkO1xyXG4gICB9XHJcbiAgIHNldCBQYXNzd29yZChwYXNzd29yZDogU3RyaW5nKVxyXG4gICB7XHJcbiAgICB0aGlzLnBhc3N3b3JkID0gcGFzc3dvcmQ7XHJcbiAgIH1cclxuXHJcbiAgIGdldCBFbWFpbCgpOiBTdHJpbmdcclxuICAge1xyXG4gICAgcmV0dXJuIHRoaXMuZW1haWw7XHJcbiAgIH1cclxuICAgc2V0IEVtYWlsKGVtYWlsOiBTdHJpbmcpXHJcbiAgIHtcclxuICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcclxuICAgfVxyXG5cclxuICAgZ2V0IFBob25lTnVtYmVyKCk6IFN0cmluZ1xyXG4gICB7XHJcbiAgICByZXR1cm4gdGhpcy5waG9uZU51bWJlcjtcclxuICAgfVxyXG4gICBzZXQgUGhvbmVOdW1iZXIocGhvbmVOdW1iZXI6IFN0cmluZylcclxuICAge1xyXG4gICAgdGhpcy5waG9uZU51bWJlciA9IHBob25lTnVtYmVyO1xyXG4gICB9XHJcblxyXG59Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0lBQWFBLEtBQUs7RUFVZCxTQUFBQSxNQUFZQyxFQUFVLEVBQUVDLFNBQWlCLEVBQUVDLFFBQWdCLEVBQUVDLFFBQWdCLEVBQUVDLFFBQWdCLEVBQUVDLEtBQWEsRUFBRUMsV0FBbUIsRUFDbkk7SUFBQSxJQUFBQyxnQkFBQSxDQUFBQyxPQUFBLFFBQUFULEtBQUE7SUFBQSxJQUFBVSxnQkFBQSxDQUFBRCxPQUFBLGNBVHFCLENBQUMsQ0FBQztJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEscUJBQ0ssRUFBRTtJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEsb0JBQ0gsRUFBRTtJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEsb0JBQ0YsRUFBRTtJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEsb0JBQ0YsRUFBRTtJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEsaUJBQ0wsRUFBRTtJQUFBLElBQUFDLGdCQUFBLENBQUFELE9BQUEsdUJBQ0ksRUFBRTtJQUk1QixJQUFJLENBQUNSLEVBQUUsR0FBR0EsRUFBRTtJQUNaLElBQUksQ0FBQ0MsU0FBUyxHQUFHQSxTQUFTO0lBQzFCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsUUFBUSxHQUFHQSxRQUFRO0lBQ3hCLElBQUksQ0FBQ0MsS0FBSyxHQUFHQSxLQUFLO0lBQ2xCLElBQUksQ0FBQ0MsV0FBVyxHQUFHQSxXQUFXO0VBQ2xDO0VBQUMsSUFBQUksYUFBQSxDQUFBRixPQUFBLEVBQUFULEtBQUE7SUFBQVksR0FBQTtJQUFBQyxLQUFBLEVBRUQsU0FBQWIsTUFBQSxFQUNBO01BQ0ksSUFBSSxDQUFDQyxFQUFFO01BQ1AsSUFBSSxDQUFDQyxTQUFTO01BQ2QsSUFBSSxDQUFDQyxRQUFRO01BQ2IsSUFBSSxDQUFDQyxRQUFRO01BQ2IsSUFBSSxDQUFDQyxRQUFRO01BQ2IsSUFBSSxDQUFDQyxLQUFLO01BQ1YsSUFBSSxDQUFDQyxXQUFXO0lBQ3BCO0VBQUM7SUFBQUssR0FBQTtJQUFBRSxHQUFBLEVBRUYsU0FBQUEsSUFBQSxFQUNBO01BQ0MsT0FBTyxJQUFJLENBQUNiLEVBQUU7SUFDZixDQUFDO0lBQUFjLEdBQUEsRUFFRCxTQUFBQSxJQUFPZCxFQUFVLEVBQ2pCO01BQ0UsSUFBSSxDQUFDQSxFQUFFLEdBQUdBLEVBQUU7SUFDZDtFQUFDO0lBQUFXLEdBQUE7SUFBQUUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFDQTtNQUNDLE9BQU8sSUFBSSxDQUFDWixTQUFTO0lBQ3RCLENBQUM7SUFBQWEsR0FBQSxFQUNELFNBQUFBLElBQWNiLFNBQWlCLEVBQy9CO01BQ0MsSUFBSSxDQUFDQSxTQUFTLEdBQUdBLFNBQVM7SUFDM0I7RUFBQztJQUFBVSxHQUFBO0lBQUFFLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQ0E7TUFDQyxPQUFPLElBQUksQ0FBQ1gsUUFBUTtJQUNyQixDQUFDO0lBQUFZLEdBQUEsRUFDRCxTQUFBQSxJQUFhWixRQUFnQixFQUM3QjtNQUNDLElBQUksQ0FBQ0EsUUFBUSxHQUFHQSxRQUFRO0lBQ3pCO0VBQUM7SUFBQVMsR0FBQTtJQUFBRSxHQUFBLEVBRUQsU0FBQUEsSUFBQSxFQUNBO01BQ0MsT0FBTyxJQUFJLENBQUNWLFFBQVE7SUFDckIsQ0FBQztJQUFBVyxHQUFBLEVBQ0QsU0FBQUEsSUFBYVgsUUFBZ0IsRUFDN0I7TUFDQyxJQUFJLENBQUNBLFFBQVEsR0FBR0EsUUFBUTtJQUN6QjtFQUFDO0lBQUFRLEdBQUE7SUFBQUUsR0FBQSxFQUVELFNBQUFBLElBQUEsRUFDQTtNQUNDLE9BQU8sSUFBSSxDQUFDVCxRQUFRO0lBQ3JCLENBQUM7SUFBQVUsR0FBQSxFQUNELFNBQUFBLElBQWFWLFFBQWdCLEVBQzdCO01BQ0MsSUFBSSxDQUFDQSxRQUFRLEdBQUdBLFFBQVE7SUFDekI7RUFBQztJQUFBTyxHQUFBO0lBQUFFLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQ0E7TUFDQyxPQUFPLElBQUksQ0FBQ1IsS0FBSztJQUNsQixDQUFDO0lBQUFTLEdBQUEsRUFDRCxTQUFBQSxJQUFVVCxLQUFhLEVBQ3ZCO01BQ0MsSUFBSSxDQUFDQSxLQUFLLEdBQUdBLEtBQUs7SUFDbkI7RUFBQztJQUFBTSxHQUFBO0lBQUFFLEdBQUEsRUFFRCxTQUFBQSxJQUFBLEVBQ0E7TUFDQyxPQUFPLElBQUksQ0FBQ1AsV0FBVztJQUN4QixDQUFDO0lBQUFRLEdBQUEsRUFDRCxTQUFBQSxJQUFnQlIsV0FBbUIsRUFDbkM7TUFDQyxJQUFJLENBQUNBLFdBQVcsR0FBR0EsV0FBVztJQUMvQjtFQUFDO0VBQUEsT0FBQVAsS0FBQTtBQUFBO0FBQUFnQixPQUFBLENBQUFoQixLQUFBLEdBQUFBLEtBQUEifQ==