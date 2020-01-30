'use strict';
const hUtil = require('./home-util');
const sUtil = require('./search-util');
const listUtil = require('./list-util');

const fs = require('fs');
const pug = require('pug');
const handlerUtil = require('./handler-util');


function route(req, res) {

  switch (req.url) {
    case '/home':
      const info = hUtil.info();
      const infoTotal = info.total;
      const infoMaxNow = info.maxNow;
      const infoKosuu = info.kosuu;
      res.end(pug.renderFile('./views/home.pug', {
        total: infoTotal,
        maxNow: infoMaxNow,
        kosuu: infoKosuu
      }));

      break;

    case '/search': // 調べる数字が出るページ
      const gac = sUtil.getAndCheck();
      //const array = gac.array; //こっちだと改行されない
      const str = gac.str;
      //const arrayDiv = gac.arrayDiv; // これでもよいが，合わせておく
      const resultStr = gac.resultStr;
      const kosuuInArray = gac.kosuuInArray;
      const total = gac.total;
      const mapArray = gac.mapArray;
      const npFromArrayStr = gac.npFromArrayStr;
      const mapStr = mapArray.join(', ');// ,の後に空白を入れる
      
      const sInfo =sUtil.searchInfo();
      const sKosuu = sInfo.kosuu;
      const sMaxNow = sInfo.maxNow;
      res.end(pug.renderFile('./views/search.pug', {
        numbers1: str,
        numbers2: resultStr,
        kosuuInArray: kosuuInArray,
        total: total,
        np: npFromArrayStr,
        //numbers3: mapStr
        maxNow: sMaxNow,
        kosuu: sKosuu
      }));
      break;

    case '/list': // 調べる数字が出るページ
      //const nplist = listUtil.getMapArray(); //そのままのとき
      const nplist = listUtil.getMapArrayS();//昇順にならべたもの
      const npStr = nplist.join(', ');// ,の後に空白を入れる

      res.end(pug.renderFile('./views/list.pug', {
        nplist: npStr
      }));
      break;

    case '/favicon.ico':
      handlerUtil.handleFavicon(req, res);
      break;

    default:
      res.writeHead(302, {
        'Location': '/home'
      });
      res.end();
      break;
  }
}

module.exports = {
  route
};