var isSubset = require('..');
var assert = require('assert');

describe('subset(original, subset)', function () {
  var original;
  var subset;
  it('returns true if `subset` is a subset of `original`', function () {
    original = {foo: 'a', bar: 'b'};
    subset = {foo: 'a'};
    assert(isSubset(original, subset) === true);
  });
  it('returns true if `subset` is a subset of `original` even for nested objects', function () {
    original = {foo: 'a', bar: 'b', bas: { baz: 'c'}};
    subset = {bas: { baz: 'c'}};
    assert(isSubset(original, subset) === true);
  });
  it('returns false if `subset` is not a subset of `original`', function () {
    original = {foo: 'a', bar: 'b'};
    subset = {foo: 'b'};
    assert(isSubset(original, subset) === false);
  });
  it('returns false if `subset` is not a subset of `original` even for nested objects', function () {
    original = {foo: 'a', bar: 'b', bas: { baz: 'c'}};
    subset = {bax: { baz: 'c'}};
    assert(isSubset(original, subset) === false);
  });
  it('iterates arrays', function () {
    original = [{foo: 'a'}, {bar: 'b'}];
    subset = [{foo: 'a'}];
    assert(isSubset(original, subset) === true);
    original = [{foo: 'a'}, {bar: 'b'}];
    subset = [{foo: 'b'}];
    assert(isSubset(original, subset) === false);
  });
  it('uses strict equality by default', function () {
    original = {a: '1'};
    subset = {a: 1};
    assert(isSubset(original, subset) === false);
  });
  it('uses lenient equality when strict is set to false', function () {
    original = {a: '1'};
    subset = {a: 1};
    assert(isSubset(original, subset, false) === true);
  });
});
