'use strict';
const sUtil = require('./search-util');
const listUtil = require('./list-util');

const fs = require('fs');
const pug = require('pug');
const handlerUtil = require('./handler-util');


function route(req, res) {

  switch (req.url) {
    case '/home':
      res.end(pug.renderFile('./views/home.pug'));// form0 -> home
      break;

    case '/search': // 調べる数字が出るページ
      const funcReturn = sUtil.getAndCheck();//配列
      //const array = funcReturn[0]; //こっちだと改行されない
      const str = funcReturn[1];
      //const arrayDiv = funcReturn[2]; // これでもよいが，合わせておく
      const resultStr = funcReturn[3];
      const kosuuInArray = funcReturn[4];
      const total = funcReturn[5];
      const mapArray = funcReturn[6];
      const mapStr= mapArray.join(', ');// ,の後に空白を入れる

      
      res.end(pug.renderFile('./views/search.pug', {
        numbers1: str,
        numbers2: resultStr,
        kosuuInArray: kosuuInArray,
        total: total,
        numbers3: mapStr
      }));
      break;

    case '/list': // 調べる数字が出るページ
      const nplist = listUtil.getMapArray();
      const npStr= nplist.join(', ');// ,の後に空白を入れる

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