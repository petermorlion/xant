'use strict';

const vorpal = require('vorpal')();
const Parser = require('./parser');
const Printer = require('./printer');

vorpal
    .command('parse <fileToParse>', 'Parses a mocha test file and outputs the structure.')
    .action(function (args, callback) {
        let parser = new Parser();
        let printer = new Printer();

        parser.parse(args.fileToParse, [], result => {
            printer.print(result, [], () => {
                callback();
            });
        });
    });

vorpal
    .delimiter('theo$')
    .show();