'use strict';
const util = require('./util');
const func= require('./func');

// そのままの場合---こっちは使わない？
function getMapArray(){
  util.fileToMap();
  let mapArray=util.mapToArray();
  return mapArray;
}

// 昇順に並べる場合
function getMapArrayS(){
  util.fileToMap();
  let mapArray=util.mapToArray();

  //配列の要素を昇順に並べる。こうするとうまくいくらしい。（.sort()だと数字はうまくいかない）
  //参考にしたページ：https://www.sejuku.net/blog/62904
    function compareFunc(a, b) {
    return a - b;
  }
  let mapArrayS=mapArray.sort(compareFunc);
   
  return mapArrayS;
}

module.exports = {
  getMapArray,// ---こっちは使わない？
  getMapArrayS
};

