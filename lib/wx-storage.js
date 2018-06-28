"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WxStorage = function () {
    function WxStorage() {
        _classCallCheck(this, WxStorage);
    }

    _createClass(WxStorage, [{
        key: "getItem",
        value: function getItem(key) {
            return wx.getStorageSync(key);
        }
    }, {
        key: "setItem",
        value: function setItem(key, value) {
            wx.setStorageSync(key, value);
            return this;
        }
    }, {
        key: "removeItem",
        value: function removeItem(key) {
            wx.removeStorageSync(key);
            return this;
        }
    }, {
        key: "keys",
        value: function keys() {
            var res = {};
            try {
                res = wx.getStorageInfoSync();
            } catch (e) {
                // Do something when catch error
            }
            return res.keys || [];
        }
    }, {
        key: "clear",
        value: function clear() {
            wx.clearStorageSync();
            return this;
        }
    }]);

    return WxStorage;
}();

exports.default = WxStorage;