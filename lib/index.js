'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.expireStoreage = exports.ExpireStoreage = exports.Storage = exports.wxStorage = exports.storage = exports.nodeStorage = exports.webStorage = exports.NodeStorage = exports.WxStorage = undefined;

var _wxStorage = require('./wx-storage');

var _wxStorage2 = _interopRequireDefault(_wxStorage);

var _nodeStorage = require('./node-storage');

var _nodeStorage2 = _interopRequireDefault(_nodeStorage);

var _webStorage = require('./web-storage');

var _webStorage2 = _interopRequireDefault(_webStorage);

var _expireStoreage = require('./expire-storeage');

var _expireStoreage2 = _interopRequireDefault(_expireStoreage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var webStorage = new _webStorage2.default();
var nodeStorage = new _nodeStorage2.default();
var wxStorage = new _wxStorage2.default();
var isNode = Buffer && Buffer.isBuffer;
var isWx = !isNode && wx && wx.getStorageInfoSync;
var isWeb = !isNode && window && window.localStorage;
var storage = isWx ? wxStorage : isWeb ? webStorage : nodeStorage;
var Storage = isWx ? _wxStorage2.default : isWeb ? _webStorage2.default : _nodeStorage2.default;

var expireStoreage = new _expireStoreage2.default({
    storage: storage
});

exports.default = storage;
exports.WxStorage = _wxStorage2.default;
exports.NodeStorage = _nodeStorage2.default;
exports.webStorage = webStorage;
exports.nodeStorage = nodeStorage;
exports.storage = storage;
exports.wxStorage = wxStorage;
exports.Storage = Storage;
exports.ExpireStoreage = _expireStoreage2.default;
exports.expireStoreage = expireStoreage;