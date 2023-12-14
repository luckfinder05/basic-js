const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (!str) {
    return '';
  }
  if (str.length === 1) {
    return str;
  }

  let count = 1
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      if (count > 1) {
        result.push(`${count}${str[i]}`)
      } else {
        result.push(`${str[i]}`);
      }
      count = 1
    }
  }
  return result.join('');
}

module.exports = {
  encodeLine
};
