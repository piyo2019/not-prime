'use strict';
const util = require('./lib/util');
const func= require('./lib/func');

/** randomNumbersGet25np関数のチェック
const a=util.randomNumbersGet25np();
console.log('array='+a.n);
console.log('maxNow='+a.maxNow);
*/

/**
 * 
 */
util.fileToMap();
const total= util.npMapSize();
const maxNow=util.getMaxNow();
const kosuu=util.getKosuu();
console.log(`現在，${maxNow}までの数を${kosuu}個ランダムのとってきて調べています。`);
console.log(`集まった数は全部で${total}個です`);

