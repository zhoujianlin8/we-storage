class NodeStorage{
    __data__ = {}
    getItem (key){
        const value = this.__data__[key];
        return value === undefined ? null :value;
    }
    setItem(key,value){
        this.__data__[key] = value;
        return this;
    }
    removeItem(key){
        delete this.__data__[key];
        return this
    }
    keys(){
        return Object.keys(this.__data__);
    }
    clear(){
        this.__data__ = {};
        return this
    }
}
export default NodeStorage
