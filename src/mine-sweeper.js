const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const getValue = ([row, col]) => {
    // console.log('row, col]: ', row, col);
    if (row >= 0 && col >= 0 && row < matrix.length && col < matrix[0].length) {
      return Number(matrix[row][col]);
    }
    // console.log('return 0');
    return 0;
  }
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    result[row] = Array(matrix[row].length).fill(0);
    for (let col = 0; col < matrix[row].length; col++) {
      let sum = 0;
      sum += getValue([row - 1, col - 1]) + getValue([row - 1, col]) + getValue([row - 1, col + 1]);
      sum += getValue([row, col - 1]) + getValue([row, col + 1]);
      sum += getValue([row + 1, col - 1]) + getValue([row + 1, col]) + getValue([row + 1, col + 1]);
      result[row][col] += sum;
    }
  }
  return result;
}
module.exports = {
  minesweeper
};
