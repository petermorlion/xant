'use strict';

/**
 * Initialize a new `Printer` instance.
 *
 * @return {Printer}
 * @api public
 */

var Printer = function() {
  this.print = function(argv, options, callback) {
    console.log(JSON.stringify(argv));
    callback();
  }
}

exports = module.exports = Printer;