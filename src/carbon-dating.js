const { NotImplementedError } = require("../extensions/index.js");

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
  // 0.693 is used as the decay constant in the formula for calculating the age of an archaeological sample based on its activity.
  const RATE_CONST = 0.693 / HALF_LIFE_PERIOD;

  if (
    typeof sampleActivity !== "string" ||
    !/^\d*\.?\d+$/.test(sampleActivity) ||
    parseFloat(sampleActivity) <= 0 ||
    parseFloat(sampleActivity) > MODERN_ACTIVITY
  ) {
    return false;
  }

  const age = Math.ceil(
    Math.log(MODERN_ACTIVITY / parseFloat(sampleActivity)) / RATE_CONST
  );

  return age;
}

module.exports = {
  dateSample,
};
