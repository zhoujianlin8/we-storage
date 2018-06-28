class WxStorage {
    getItem(key) {
        return wx.getStorageSync(key)
    }

    setItem(key, value) {
        wx.setStorageSync(key, value)
        return this
    }

    removeItem(key) {
        wx.removeStorageSync(key)
        return this;
    }

    keys() {
        let res = {};
        try {
            res = wx.getStorageInfoSync()

        } catch (e) {
            // Do something when catch error
        }
        return res.keys || []
    }

    clear() {
        wx.clearStorageSync()
        return this;
    }
}

export default WxStorage
