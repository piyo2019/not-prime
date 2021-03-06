'use strict';

const util = require('./util');
const func = require('./func');

function getAndCheck() {
  util.fileToMap();
  const array = util.getNumbersArray();// ランダムに得た数の配列
  const len = array.length;// len = kosuu のはず
  const str = array.join(', ');// arrayをつないで文字列にした(空白入り→改行される）。

  let arrayDiv = util.check(array).arrayAndDiv;//arrayDiv:arrayの数字をcheckして得た配列
  let np = util.check(array).np;//np:arrayの数字で素数じゃない判定された数の配列
  const kosuuInArray = arrayDiv[len];// 最後の項はarrayの中の素数じゃない判定済みの数の個数
  delete arrayDiv[len];//--最後の項を除いておく
  const resultStr = arrayDiv.join(', ');//arrayDivをつないで文字列にした。
  const npFromArrayStr = np.join(', ');//arrayDivをつないで文字列にした。

  let total = util.npMapSize();
  let mapArray = util.mapToArray()

  return { array, str, arrayDiv, npFromArrayStr, resultStr, kosuuInArray, total, mapArray }

}//--- getAndCheck ここまで

function searchInfo(){
  let kosuu=util.getKosuu();
  let maxNow=util.getMaxNow();
  return {kosuu, maxNow}
}

module.exports = {
  getAndCheck,
  searchInfo
};

//=== EOF =====================