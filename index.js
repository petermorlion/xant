'use strict';

const vorpal = require('vorpal')();
const Parser = require('./parser');

vorpal
  .command('parse <fileToParse>', 'Parses a mocha test file and outputs the structure.')
  .action(function(args, callback) {
    let parser = new Parser();
    let result = parser.parse('foo');
    console.log(result);
    callback();
  });

vorpal
  .delimiter('theo$')
  .show();