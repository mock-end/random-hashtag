'use strict';

var expect = require('chai').expect;


describe('random-hashtag: ', function () {

  var randomHash = require('../../');

  it('randomTld()', function () {
    expect(randomHash()).to.be.match(/^#[a-z]+$/)
  });
});
