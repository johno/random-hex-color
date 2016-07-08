'use strict'

import test from 'ava'
import hexColorRegex from 'hex-color-regex'
import randomHexColor from './'

test('should return a hex color', t => {
  t.plan(10)

  for(let i = 0; i < 10; i++) {
    t.regex(randomHexColor(), hexColorRegex())
  }
})
