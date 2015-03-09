'use strict';

/**
 * Export `objSubset`
 */
module.exports = objSubset;

/**
 * Determine if `subset` is a subset of `obj`
 * @param  {Object} obj
 * @param  {Object} subset
 * @return {Boolean}
 * @api public
 */
function objSubset (obj, subset) {
    if (!(typeof obj == 'object') || !(typeof subset == 'object')) return false;
    for (var key in subset) {
        if (!(key in obj)) return false;
        if (subset[key] != obj[key]) return false;
    }
    return true;
}
