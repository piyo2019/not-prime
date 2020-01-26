'use strict';
const fs =require('fs');
const func = require('./func');
const fileName = './npMapFile.json'; //--変数に入れるならいらん？
let npMap = new Map ();

const max = 1000; // ランダムのとってくる数の最大値+1
const kosuu = 20; // ランダムにとってくる数の個数

//ファイルから読み込む処理　3-10 p7
// 同期的にファイルから復元　try-catch文
// fileToMap関数
/**
 * @fileToMap
 */
function fileToMap(){ 
  try{
    const data = fs.readFileSync(fileName, 'utf8');
    npMap = new Map(JSON.parse(data));
  }catch(ignor){
    console.log(fileName + 'から復元できませんでした');
  }  
}

// 素数じゃない数をファイルに保存する　参考：3-10-p3
// saveNumber関数
function saveNumber(){
  fs.writeFileSync(fileName, JSON.stringify(Array.from(npMap)),'utf8');
}

// 1 ~ max-1 から，npMapにない数をkosuu個の数字をランダムに出す
//　（randomNumbersGet2 のとき → ただし，2で割り切れないもの）
//　（randomNumbersGet25 のとき → ただし，2,5で割り切れないもの）
function getNumbersArray(){
  let array = func.randomNumbersGet25(max, kosuu, npMap);
  return array;
}


/**
 * @check 
 * 配列の中の数字から「素数じゃない数」を見つける関数。npMap（Map）が必要
 * （配列の中の数字同士の最大公約数を調べる。
 * 配列の中の数字を調べるだけなので，素数じゃなくても「素数じゃない」判定ができないこともある。
 * みつけたら，約数ともにnpMapに加えていく
 * 
 * @param {array} array 
 * @return {array} arrayAndDiv
 */
function check(array) {  
  const len = array.length;
  let div = []; //div[i]:みつけたarray[i]の約数
  let d = null;//gcdが入るとこ

  for (let i = 0; i < len; i++) {
    for (let j = 0; j < len; j++) {
      if (array[j] > 1 && array[i] > array[j]) {//--- array[i]>array[j]のときのみ調べる
        d = func.gcd(array[i], array[j]); //-- 1<= d<=array[j]となる
        switch (d) {
          case 1:
            break; 

          case array[j]:
            if (!div[i]) {
              div[i] = d;
                npMap.set(array[i], d);
                saveNumber();
            }
            break;

          default:
            if (!div[i]) {
              div[i] = d;
                npMap.set(array[i], d);
                saveNumber();
            }
            if (!div[j]) {
              div[j] = d;
                npMap.set(array[j], d);
                saveNumber();
            }
            break;
        }
      }
    }
  }

  const arrayAndDiv = [];
  let count = 0;
  for (let i = 0; i < len; i++) {
    if (div[i] > 1) {
      count = count + 1;
      arrayAndDiv[i] =` ${array[i]}=${div[i]}*${array[i] / div[i]}`;
    } else {
      //arrayAndDiv[i] = ` ${array[i]}=?`;
      arrayAndDiv[i] = ` ---- `;
    }
  }

  arrayAndDiv.push(count);//--「素数じゃない数」の個数を配列の最後に加える

  return arrayAndDiv;
}

// これまでに集めた「素数じゃない数」の個数を調べる
function npMapSize(){
  return npMap.size;
}

//npMapのキーを配列にしたもの返す
function mapToArray(){
  let keyArray=[];
  let size = npMapSize();
  let array = Array.from(npMap);
  for(let i=0;i<size;i++){
    keyArray.push(array[i][0]);
  }
  return keyArray;
}

module.exports = {
  fileToMap,
  getNumbersArray,
  check,
  npMapSize,
  mapToArray
};