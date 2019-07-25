/**
 * Check the time passed from a date
 * 
 * @param {Date || number} input - a date in the pass
 * @returns {string} the time padded from a date
 * 
 * @example
 * ```
 * import awa = require('a-white-ago');
 * 
 * console.log(awa(new Date() - 1000));
 * // => a second ago
 * ```
  */
declare function awa(input: number | string, short?: boolean): string

export = awa;