const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} work initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw new Error("'arr' parameter must be an instance of the Array!")
  const draft = [...arr]
  for (let i = 0; i < draft.length; i++) {
    if (draft[i] === '--discard-prev') {
      delete draft[i];
      if (i > 0) {
        delete draft[i - 1];
      }
    } else if (draft[i] === '--discard-next') {
      delete draft[i];
      delete draft[i + 1];

    } else if (draft[i] === '--double-next') {
      delete draft[i];
      if (i < draft.length - 1) {
        draft.splice(i + 1, 0, draft[i + 1])
      }
    } else if (draft[i] === '--double-prev') {
      delete draft[i];
      if (i > 0) {
        draft.splice(i - 1, 0, draft[i - 1])
      }
    }
  }
  return draft.filter(item => item)
}

module.exports = {
  transform
};

