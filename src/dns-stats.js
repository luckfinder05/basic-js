const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {

  const result = domains.reduce((acc, curr) => {
    const n = curr.split('.').reverse();
    for (let i = 0; i < n.length; i++) {
      const name = n.slice(0, i + 1).join('.');
      if (!acc['.' + name]) {
        acc['.' + name] = 1
      } else {
        acc['.' + name]++
      }
    }
    return acc
  }, {})

  return result
}

module.exports = {
  getDNSStats
};
