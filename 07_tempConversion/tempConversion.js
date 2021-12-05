const ftoc = function (degres) {
  let temperature = Math.round((degres - 32) * (5 / 9) * 10) / 10;
  return temperature;
};

const ctof = function (degres) {
  let temperature = Math.round((degres * (9 / 5) + 32) * 10) / 10;
  return temperature;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
