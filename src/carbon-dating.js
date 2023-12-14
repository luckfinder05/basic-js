const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  const s = Number(sampleActivity)
  if ((typeof sampleActivity !== 'string') || Number.isNaN(s) || (s < 0)) return false;

  const modernActivity = MODERN_ACTIVITY / s;
  const halfLifePeriod = HALF_LIFE_PERIOD;

  const k = 0.693 / halfLifePeriod;
  const result = Math.ceil(Math.log(modernActivity) / k);
  if (result > Number.MAX_SAFE_INTEGER || result < 0) return false;
  return result
}

module.exports = {
  dateSample
};
