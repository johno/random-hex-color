'use strict'

var assert = require('assert')
var hexColorRegex = require('hex-color-regex')
var randomHexColor = require('..')

describe('random-hex-color', function() {

  it('should return a hex color', function() {
    for(var i = 0; i < 10; i++) {
      var hexColor = randomHexColor()
      assert.ok(hexColorRegex().test(hexColor))
    }
  })
})
