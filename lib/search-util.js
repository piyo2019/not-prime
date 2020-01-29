'use strict';

const util = require('./util');
const func = require('./func');

function getAndCheck() {
  const funcReturn = [];// 返り値を入れる配列
  util.fileToMap();
  const array = util.getNumbersArray();// ランダムに得た数の配列
  const len = array.length;// len = kosuu のはず
  const str = array.join(', ');// arrayをつないで文字列にした(空白入り→改行される）。

  let arrayDiv = util.check(array);//arrayDiv:arrayの数字をcheckして得た配列
  const kosuuInArray = arrayDiv[len];// 最後の項はarrayの中の素数じゃない判定済みの数の個数
  delete arrayDiv[len];//--最後の項を除いておく
  const resultStr = arrayDiv.join(', ');//arrayDivをつないで文字列にした。

  let total = util.npMapSize();
  let mapArray=util.mapToArray()

  funcReturn.push(array);// ---funcReturn[0]=array
  funcReturn.push(str);// ---funcReturn[1]=str
  funcReturn.push(arrayDiv);// ---funcReturn[2]=arrayDiv  
  funcReturn.push(resultStr);// ---funcReturn[3]=resultStr
  funcReturn.push(kosuuInArray);// ---funcReturn[4]=kosuuInArray
  funcReturn.push(total);// ---funcReturn[5]=total
  funcReturn.push(mapArray);// ---funcReturn[6]=mapArray

  return funcReturn;

}//--- getAndCheck ここまで


module.exports = {
  getAndCheck,
};

//=== EOF =====================