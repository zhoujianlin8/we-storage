function parseKey(str,prefix) {
    const reg = new RegExp(`^${prefix}([\\s\\S]*)__([0-9]+)$`,'g');
    let arr = [];
    str.replace(reg,function (world,$1,$2) {
        arr = [$1,$2]
    });
    return arr
}
function getKey(arr = [],key) {
   let full;
   for (let i=0,len = arr.length; i<len;i++){
       if(arr[i].indexOf(key)===0){
           full = arr[i];
           break;
       }
   }
   return full
}
class ExpireStorage{
    constructor(options){
        if(typeof options === 'function'){
            options = {storage : options}
        }
        if(!options || !options.storage){
            return console.error('options.storage 不能为空')
        }
        this._prefix = options.prefix || '__expire__';
        this._defaultExpire = options.defaultExpire || 24*3600*1000;
        this._storage = options.storage;
    }
    getItem (key){
        key = getKey(this._storage.keys(),this._prefix+key);
        if(key){
            const time = parseKey(key,this._prefix)[1];
            //已过期
            if(time < new Date().getTime()){
                this._storage.removeItem(key);
                key = null;
            }
        }
        return key ? this._storage.getItem(key) : null
    }
    setItem(key,value,expireTime){
        const keys = this._storage.keys();
        const now = new Date().getTime();
        // 删除全部过期数据 与当前key相关数据
        keys.forEach((item)=>{
            const arr = parseKey(item,this._prefix);
            if(arr[0]){
                if(arr[0] === key) {
                    this._storage.removeItem(this._prefix+arr[0]+'__'+arr[1])
                }else if(arr[1] <  now){
                    this._storage.removeItem(this._prefix+arr[0]+'__'+arr[1])
                }
            }
        })
        const full = this._prefix+key+'__'+ ( now+ (expireTime || this._defaultExpire));
        this._storage.setItem(full,value);
        return this;
    }
    removeItem(key){
        key = getKey(this._storage.keys(),this._prefix+key);
        key &&  this._storage.removeItem(key);
        return this;
    }
    keys(){
        const keys = this._storage.keys();
        let newKeys = [];
        keys.forEach((item)=>{
            if(item && item.indexOf(this._prefix) === 0){
                const a = parseKey(item,this._prefix);
                if(a[0]){
                    newKeys.push(a[0])
                }
            }
        });
        return newKeys;
    }
    clear(){
        this._storage.clear();
        return this
    }
}
export default ExpireStorage
