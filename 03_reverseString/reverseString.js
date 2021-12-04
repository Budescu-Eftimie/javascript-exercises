const reverseString = function (str) {
  let array = str.split("");
  let reversArray = array.reverse().join("");
  return reversArray;
};

// Do not edit below this line
module.exports = reverseString;
