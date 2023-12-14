const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  constructor() {
    this.maxDepth = 0;
  }
  calculateDepth(arr, notFirstRun, depth = 1) {
    if (!notFirstRun) {
      this.maxDepth = 0;
      notFirstRun = true
    }

    this.maxDepth = Math.max(this.maxDepth, depth);
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        this.calculateDepth(arr[i], notFirstRun, depth + 1)
      }
    }
    return this.maxDepth
  }
}

module.exports = {
  DepthCalculator
};
