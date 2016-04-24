'use strict';

var randomLorem = require('random-lorem');

module.exports = function () {
  return '#' + randomLorem();
};
