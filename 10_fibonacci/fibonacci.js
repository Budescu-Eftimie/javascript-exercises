const fibonacci = function (n) {
  let array = [1, 1];
  for (i = 2; i < n; i++) {
    let element = array.slice(array.length - 2).reduce((a, b) => a + b, 0);
    array.push(element);
  }
  let number = array.slice(-1)[0];
  if (n > 0) {
    return number;
  } else return "OOPS";
};

// Do not edit below this line
module.exports = fibonacci;
