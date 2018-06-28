const Storge = require('../lib/index');
const storage = Storge.expireStoreage;
storage.setItem('as',11,100);
storage.setItem('a23',21);
console.log(storage.getItem('as'),storage.keys());
setTimeout(function () {
    console.log(storage.getItem('as'),storage.keys());
},200);
