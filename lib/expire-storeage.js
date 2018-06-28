'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function parseKey(str, prefix) {
    var reg = new RegExp('^' + prefix + '([\\s\\S]*)__([0-9]+)$', 'g');
    var arr = [];
    str.replace(reg, function (world, $1, $2) {
        arr = [$1, $2];
    });
    return arr;
}
function getKey() {
    var arr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var key = arguments[1];

    var full = void 0;
    for (var i = 0, len = arr.length; i < len; i++) {
        if (arr[i].indexOf(key) === 0) {
            full = arr[i];
            break;
        }
    }
    return full;
}

var ExpireStorage = function () {
    function ExpireStorage(options) {
        _classCallCheck(this, ExpireStorage);

        if (typeof options === 'function') {
            options = { storage: options };
        }
        if (!options || !options.storage) {
            return console.error('options.storage 不能为空');
        }
        this._prefix = options.prefix || '__expire__';
        this._defaultExpire = options.defaultExpire || 24 * 3600 * 1000;
        this._storage = options.storage;
    }

    _createClass(ExpireStorage, [{
        key: 'getItem',
        value: function getItem(key) {
            key = getKey(this._storage.keys(), this._prefix + key);
            if (key) {
                var time = parseKey(key, this._prefix)[1];
                //已过期
                if (time < new Date().getTime()) {
                    this._storage.removeItem(key);
                    key = null;
                }
            }
            return key ? this._storage.getItem(key) : null;
        }
    }, {
        key: 'setItem',
        value: function setItem(key, value, expireTime) {
            var _this = this;

            var keys = this._storage.keys();
            var now = new Date().getTime();
            // 删除全部过期数据 与当前key相关数据
            keys.forEach(function (item) {
                var arr = parseKey(item, _this._prefix);
                if (arr[0]) {
                    if (arr[0] === key) {
                        _this._storage.removeItem(_this._prefix + arr[0] + '__' + arr[1]);
                    } else if (arr[1] < now) {
                        _this._storage.removeItem(_this._prefix + arr[0] + '__' + arr[1]);
                    }
                }
            });
            var full = this._prefix + key + '__' + (now + (expireTime || this._defaultExpire));
            this._storage.setItem(full, value);
            return this;
        }
    }, {
        key: 'removeItem',
        value: function removeItem(key) {
            key = getKey(this._storage.keys(), this._prefix + key);
            key && this._storage.removeItem(key);
            return this;
        }
    }, {
        key: 'keys',
        value: function keys() {
            var _this2 = this;

            var keys = this._storage.keys();
            var newKeys = [];
            keys.forEach(function (item) {
                if (item && item.indexOf(_this2._prefix) === 0) {
                    var a = parseKey(item, _this2._prefix);
                    if (a[0]) {
                        newKeys.push(a[0]);
                    }
                }
            });
            return newKeys;
        }
    }, {
        key: 'clear',
        value: function clear() {
            this._storage.clear();
            return this;
        }
    }]);

    return ExpireStorage;
}();

exports.default = ExpireStorage;