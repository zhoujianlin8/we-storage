## we-storage
### 说明
* 支持微信storage、web localstorage、纯数据node-storage 3种模式 统一接口 
* 统一支持数据类型直接存储获取
* expire-storeage模块 支持添加过期时间处理
### 使用与api

```
import storage,{expireStoreage,webStorage,nodeStorage,wxStorage} from 'we-storage'
storage.getItem('xxx')
storage.setItem('xxx','xxx')
storage.removeItem('xxx')
storage.keys() //获取所有key值
storage.clear() //清除

expireStoreage.setItem('key','value',1000*60*24 //一天后过期) 
其他api 与storage 一致
```



## FDE 工具
```
npm install fde-cli -g
```

### 使用文档
* [fde-cli](https://www.npmjs.com/package/fde-cli)


