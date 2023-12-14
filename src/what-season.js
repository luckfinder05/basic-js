const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!';
  try {
    function isValidDate(date) {
      return (date && typeof date.getUTCDate() === 'number' &&
        !!date?.getDate() && typeof Date.now() === "number" &&
        Object.prototype.toString.call(date) === "[object Date]"
        && !Number.isNaN(date));
    }

    if (!isValidDate(date)) throw new Error('Invalid date!');
    const month = date.getMonth()
    if (month < 2) return 'winter';
    if (month < 5) return 'spring';
    if (month < 8) return 'summer';
    if (month < 11) return 'autumn';
    return 'winter';
  } catch (e) {
    throw new Error('Invalid date!');
  }
}

module.exports = {
  getSeason
};

// console.log('getSeason(new Date(2020, 12, 31)): ', getSeason(new Date(2020, 11, 31)));

// const fakeDate = {
//   toString() {
//     return Date.prototype.toString.call(new Date());
//   },
//   [Symbol.toStringTag]: 'Date'
// };

// Object.setPrototypeOf(fakeDate, Object.getPrototypeOf(new Date()));

// console.log('getSeason(fakeDate): ', getSeason(fakeDate));
