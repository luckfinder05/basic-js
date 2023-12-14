const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  if (s1.length > s2.length) {
    return getCommonCharacterCount(s2, s1);
  }
  const a1 = [...s1]
  const a2 = [...s2]
  let count = 0;
  for (let i = 0; i < a1.length; i++) {
    const a2Index = a2.indexOf(a1[i]);
    if (a2Index >= 0) {
      delete a2[a2Index];
      count++
    }
  }
  return count;
}

module.exports = {
  getCommonCharacterCount
};
