'use strict'

module.exports = function randomHexColor() {
  return '#' + Math.floor(Math.random()*16777215).toString(16)
};
