'use strict';

/**
 * Initialize a new `Parser` instance.
 *
 * @return {Parser}
 * @api public
 */

var Parser = function() {
  this.parse = function(argv, options) {
    return argv + 'bar';
  }
}

exports = module.exports = Parser;