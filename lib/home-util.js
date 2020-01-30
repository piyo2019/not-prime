'use strict';
const util = require('./util');
const func = require('./func');

util.fileToMap();
const total = util.npMapSize();
const maxNow = util.getMaxNow();
const kosuu = util.getKosuu();

function info() {
  return { total, maxNow, kosuu };
}

module.exports = {
  info
};