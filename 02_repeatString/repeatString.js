const repeatString = function (stringToRepeat, numberOfrepeats) {
  let result = "";
  for (let i = 0; i < numberOfrepeats; i++) {
    result += stringToRepeat;
  }
  if (numberOfrepeats > -1) {
    return result;
  } else if (stringToRepeat === "") {
    return "";
  } else {
    return "ERROR";
  }
};

// Do not edit below this line
module.exports = repeatString;
