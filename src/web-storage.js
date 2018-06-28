class WebStorage{
    getItem (key){
        let res = localStorage.getItem(key);
        if (res){
            try{
                res = JSON.parse(res);
                const type = res.type;
                const value = res.value;
                if(type === 'undefined'){
                    res = undefined
                }else if(type === 'boolean'){
                    res = (value === 'true') ? true : false
                }else if(type === 'object'){
                    res = value;
                }else if(type === 'number'){
                    res = Number(value)
                }else if(type){
                    res = value
                }
            }catch (e) {
                localStorage.removeItem(key);
                res = null;
            }
        }
        return res
    }
    setItem(key,value){
        localStorage.setItem(key,JSON.stringify({type: typeof value,value: value}))
        return this;
    }
    removeItem(key){
        localStorage.removeItem(key)
        return this;
    }
    keys(){
       return Object.keys(localStorage);
    }
    clear(){
        localStorage.clear();
        return this
    }
}
export default WebStorage
