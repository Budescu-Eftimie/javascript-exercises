const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (someArray) {
  return someArray.reduce((a, b) => a + b, 0);
};

const multiply = function (someArray) {
  return someArray.reduce((a, b) => a * b);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (n) {
  let someArray = [];
  for (let index = 1; index <= n; index++) {
    someArray.push(index);
  }
  return someArray.reduce((a, b) => a * b, 1);
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
