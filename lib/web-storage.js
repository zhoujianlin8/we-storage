'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var WebStorage = function () {
    function WebStorage() {
        _classCallCheck(this, WebStorage);
    }

    _createClass(WebStorage, [{
        key: 'getItem',
        value: function getItem(key) {
            var res = localStorage.getItem(key);
            if (res) {
                try {
                    res = JSON.parse(res);
                    var type = res.type;
                    var value = res.value;
                    if (type === 'undefined') {
                        res = undefined;
                    } else if (type === 'boolean') {
                        res = value === 'true' ? true : false;
                    } else if (type === 'object') {
                        res = value;
                    } else if (type === 'number') {
                        res = Number(value);
                    } else if (type) {
                        res = value;
                    }
                } catch (e) {
                    localStorage.removeItem(key);
                    res = null;
                }
            }
            return res;
        }
    }, {
        key: 'setItem',
        value: function setItem(key, value) {
            localStorage.setItem(key, JSON.stringify({ type: typeof value === 'undefined' ? 'undefined' : _typeof(value), value: value }));
            return this;
        }
    }, {
        key: 'removeItem',
        value: function removeItem(key) {
            localStorage.removeItem(key);
            return this;
        }
    }, {
        key: 'keys',
        value: function keys() {
            return Object.keys(localStorage);
        }
    }, {
        key: 'clear',
        value: function clear() {
            localStorage.clear();
            return this;
        }
    }]);

    return WebStorage;
}();

exports.default = WebStorage;