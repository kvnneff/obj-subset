'use strict';

/**
 * Export `isSubset`
 */
module.exports = isSubset;

/**
 * Determine if `subset` is a subset of `original`
 * @param  {Object} original  The original object
 * @param  {Object} subset  The subset
 * @return {Boolean}
 * @api public
 */
function isSubset (original, subset, strict) {
  strict = (strict === false) ? false : true;
  if (typeof subset !== 'object' || typeof original !== 'object') return false;
  if (!!subset && !original) return false;

  if (Array.isArray(subset)) {
    if (typeof(original.length) !== 'number') return false;
    var originalArray = Array.prototype.slice.call(original);
    return subset.every(function (subsetItem) {
      return originalArray.some(function (originalItem) {
        return isSubset(subsetItem, originalItem)
      });
    });
  }

  return Object.keys(subset).every(function (key) {
    var originalProp = original[key];
    var subsetProp = subset[key];
    if (typeof(originalProp) === 'object'
      && originalProp !== null
      && subsetProp !== null) return isSubset(originalProp, subsetProp, strict);
    if (strict) return originalProp === subsetProp;
    return originalProp == subsetProp;
  });
}
