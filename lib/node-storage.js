"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NodeStorage = function () {
    function NodeStorage() {
        _classCallCheck(this, NodeStorage);

        this.__data__ = {};
    }

    _createClass(NodeStorage, [{
        key: "getItem",
        value: function getItem(key) {
            var value = this.__data__[key];
            return value === undefined ? null : value;
        }
    }, {
        key: "setItem",
        value: function setItem(key, value) {
            this.__data__[key] = value;
            return this;
        }
    }, {
        key: "removeItem",
        value: function removeItem(key) {
            delete this.__data__[key];
            return this;
        }
    }, {
        key: "keys",
        value: function keys() {
            return Object.keys(this.__data__);
        }
    }, {
        key: "clear",
        value: function clear() {
            this.__data__ = {};
            return this;
        }
    }]);

    return NodeStorage;
}();

exports.default = NodeStorage;