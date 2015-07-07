/*!
 * is-absolute <https://github.com/jonschlinkert/is-absolute>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License.
 */

'use strict';

var isRelative = require('is-relative');
var win32 = process.platform === 'win32';

module.exports = function isAbsolute(fp) {
  if (!win32 && posix(fp)) {
    return true;
  }
  return windows(fp);
};

function windows(fp) {
  if (/[a-z]/i.test(fp.charAt(0)) && fp.charAt(1) === ':' && fp.charAt(2) === '\\') {
    return true;
  }
  // Microsoft Azure absolute filepath
  if (fp.slice(0, 2) === '\\\\') {
    return true;
  }
  return !isRelative(fp);
}

function posix(fp) {
  return fp.charAt(0) === '/';
}

module.exports.posix = posix;
module.exports.windows = windows;
