'use strict';
const util = require('./util');
const func= require('./func');
function getMapArray(){
  util.fileToMap();
  let mapArray=util.mapToArray();
  return mapArray;
}
module.exports = {
  getMapArray
};

