'use strict';
const util = require('./lib/util');
const func= require('./lib/func');

//const a=func.randomNumbersGet25(max,kosuu,npMap);
//util.fileToMap();
const a=util.randomNumbersGet25np();
console.log('array='+a.n);
console.log('maxNow='+a.maxNow);
/** 
const max=1000;
const kosuu=20;
//const npMap=new Map();


util.fileToMap();
const a=func.randomNumbersGet25(max,kosuu,npMap);
console.log('npMapSize='+ util.npMapSize());
console.log('n='+a.n);
console.log('maxNow='+a.maxNow);
*/