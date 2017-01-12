// This is a totally fake mocha test file, just to test the parsing.
var chai = require('chai');

import {Something} from 'some/path';

describe('My resource', function() {
    let aVariable;

    before(function() {
        aVariable = 3;
    });

    after(function() {
        aVariable = 4;
    });

    describe('When calling foo', function() {
        let anotherVariable;

        it('should return bar', function() {
            expect(aVariable).to.eql(5);
        });
    });

    describe("When calling moo", function() {
        let anotherVariable;

        it("should return milk", function() {
            expect(aVariable).to.eql(5);
        });
    });
});