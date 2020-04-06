'use strict';

const yargs = require('yargs');
const Parser = require('./parser');
const Printer = require('./printer');

yargs
    .command(
        'parse <fileToParse>',
        'Parses a mocha test file and outputs the structure.',
        (yargs) => {
            yargs.positional('fileToParse', {
                describe: 'The file to parse',
                type: 'string'
            })
        },
        (argv) => {
            let parser = new Parser();
            let printer = new Printer();
            parser.parse(argv.fileToParse, [], result => {
                printer.print(result, [], () => {});
            });
        }).argv;
