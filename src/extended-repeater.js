const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const { repeatTimes, separator, addition, additionRepeatTimes, additionSeparator } = options;

  let part = '';
  if (addition !== undefined) part = str + Array(additionRepeatTimes || 1).fill(String(addition) || '').join(additionSeparator || '|');
  else {
    part = str;
  }

  const arr = Array(repeatTimes || 1).fill(part);

  return arr.join(separator || '+')
}

module.exports = {
  repeater
};
