const palindromes = function (someString) {
  //remove  punctuation, spaces and convert to lowerCase
  someString = someString
    .replace(/[^\w\s]|_/g, "")
    .replace(/\s+/g, "")
    .toLowerCase();
  // transform string to array and reverse array then join back into a string
  let reverseString = someString.split("").reverse().join("");
  // Check if strings are palindroms ? true:false
  let palindromes = reverseString === someString ? true : false;
  return palindromes;
};

// Do not edit below this line
module.exports = palindromes;
