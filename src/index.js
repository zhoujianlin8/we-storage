import WxStorage from './wx-storage';
import NodeStorage from './node-storage';
import WebStorage from './web-storage';
import ExpireStoreage from './expire-storeage'
const webStorage = new WebStorage();
const nodeStorage = new NodeStorage();
const wxStorage = new WxStorage();
const isNode = Buffer && Buffer.isBuffer;
const isWx = !isNode && wx && wx.getStorageInfoSync;
const isWeb = !isNode && window && window.localStorage;
const storage = isWx ? wxStorage : isWeb? webStorage: nodeStorage;
const Storage = isWx ? WxStorage : isWeb? WebStorage: NodeStorage;

const expireStoreage = new ExpireStoreage({
    storage: storage
});

export default storage;
export {WxStorage,NodeStorage,webStorage,nodeStorage,storage,wxStorage,Storage,ExpireStoreage,expireStoreage}
