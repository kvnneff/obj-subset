var subset = require('..');
var assert = require('assert');

describe('subset(obj, sub)', function () {
    it('returns true if `sub` is a subset of `obj`', function () {
        var obj = {foo: 'bar', baz: 'qux'};
        var sub = {baz: 'qux'};
        assert(subset(obj, sub) === true);
    });
    it('returns false if `sub` is not a subset of `obj`', function () {
        var obj = {foo: 'bar', baz: 'qux'};
        var sub = {baz: 'quux'};
        assert(subset(obj, sub) === false);
    });
});