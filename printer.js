'use strict';

/**
 * Initialize a new `Printer` instance.
 *
 * @return {Printer}
 * @api public
 */

var Printer = function () {
    this.print = function (argv, options, callback) {
        argv.body.forEach(function (item) {
            if (item.type !== 'ExpressionStatement') {
                return;
            }

            if (item.expression.callee && item.expression.callee.name === 'describe') {
                printFunction(item.expression.arguments, 0);
            }
        });

        callback();
    }

    let printFunction = function(nodes, indent) {
        let spacer = new Array(indent + 1).join(' ');

        if (nodes[0].type === 'Literal') {
            console.log(spacer + nodes[0].value);
        }

        if (nodes[1].type === 'FunctionExpression') {
            nodes[1].body.body.forEach(item => {
                if (item.type === 'ExpressionStatement'
                    && item.expression.type === 'CallExpression') {

                        if (item.expression.callee.name === 'describe'
                        || item.expression.callee.name === 'it') {
                            printFunction(item.expression.arguments, indent + 4);
                        }
                    }
            });
        }
    };
}

exports = module.exports = Printer;