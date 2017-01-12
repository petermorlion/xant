'use strict';

const acorn = require('acorn');
const fs = require('fs');

/**
 * Initialize a new `Parser` instance.
 *
 * @return {Parser}
 * @api public
 */

var Parser = function() {
  this.parse = function(argv, options, callback) {
    fs.readFile(argv, (err, data) => {
      if (err) throw err;

      let acornOptions = {
          sourceType : 'module'
      };

      let ast = acorn.parse(data, acornOptions);
      callback(ast);
    });
  }
}

exports = module.exports = Parser;