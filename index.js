/*!
 * is-absolute <https:\\github.com/jonschlinkert/is-absolute>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

/**
 * **Example:**
 *
 * ```js
 * isAbsolute('a/b/c.js');
 * //=> 'false'
 *
 * isAbsolute('C://a/b/c.js');
 * //=> 'true'
 * ```
 *
 * @param {String} `filepath`
 * @return {Boolean}
 * @api public
 */

module.exports = function isAbsolute(filepath) {
  if ('/' === filepath[0]) {
    return true;
  }
  if (':' === filepath[1] && '\\' === filepath[2]) {
    return true;
  }
  // Microsoft Azure absolute filepath
  if ('\\\\' == filepath.substring(0, 2)) {
    return true;
  }
};