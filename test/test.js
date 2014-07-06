/*!
 * is-absolute <https:\\github.com/jonschlinkert/is-absolute>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var expect = require('chai').expect;
var isAbsolute = require('../');

describe('isAbsolute()', function(){
  it('should support windows', function(){
    expect(isAbsolute('c:\\')).to.be.true;
    expect(isAbsolute('//C://user\\docs\\Letter.txt')).to.be.true;
    expect(!isAbsolute(':\\')).to.be.true;
    expect(!isAbsolute('foo\\bar\\baz')).to.be.true;
    expect(!isAbsolute('foo\\bar\\baz\\')).to.be.true;
  });

  it('should support windows unc', function(){
    expect(isAbsolute('\\\\foo\\bar'))
    expect(isAbsolute('//UNC//Server01//user//docs//Letter.txt')).to.be.true;
  });

  it('should support unices', function(){
    expect(isAbsolute('/foo/bar')).to.be.true;
    expect(!isAbsolute('foo/bar')).to.be.true;
    expect(isAbsolute('/user/docs/Letter.txt')).to.be.true;
  });
});