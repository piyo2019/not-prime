'use strict';

/**
 * @gcd
 * 2数の最大公約数を求める関数（ユークリッドの互除法）
 * 
 * @param {num} a 正の整数
 * @param {num} b 正の整数
 * @return {num} aとbの最大公約数
 * 
 */

function gcd(a, b) {
  // TODO  **a ,b が正の整数であるかどうかのチェック
  let r = a % b; // 余りを入れる変数。
  while (r !== 0) {
    a = b;
    b = r;
    r = a % b;
  }
  return b;// あまり0になったときの割る数bが最大公約数
}


/**
*  @randomNumbersGet2
*  rMapに含まれない数N（3<= N < max ，ただし2で割りきれないもの）を　kosuu 個ランダムに取得し，配列nにして返す関数
* @randomNumbersGet25
* rMapに含まれない数N（3<= N < max ，ただし2，5で割りきれないもの）を　kosuu 個ランダムに取得し，配列nにして返す関数
* 
* @param {num} max 
* @param {Map} rMap 
* @return {array} n 
* 
*/

//----今回はこれは使わない----------------------
function randomNumbersGet25(max, kosuu, rMap) {
  console.log('rMap=' + rMap);//--------------検証用
  console.log('kosuu=' + kosuu);//--------------検証用
  let maxNow = max;
  let d = 1000;//残りが少なくなった時，dずつmaxNowを増やす
  while (rMap.size + kosuu > max * 0.2) { // rMapに含まれない奇数が少ない時（「なくなったとき」なら*0.4）
    maxNow = maxNow + d; //--【TODO】少なくなったらmaxを上げる
  }
  let n = [];
  for (let i = 0; i < kosuu; i++) {
    do {
      n[i] = Math.floor(Math.random() * (max / 2 - 1)) * 2 + 3;
    } while (n[i] % 5 == 0 || rMap.has(n[i]) || n.indexOf(n[i]) !== i); // 5で割り切れる数やrMapに含まれる値，すでに取得した値の場合は取得しなおす
  }
  return { n, maxNow };
}
//---------------------------------------


module.exports = {
  //  randomNumbersGet25, //----不要？
  gcd
};