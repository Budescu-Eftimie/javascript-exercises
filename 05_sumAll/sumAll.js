const sumAll = function (firstInt, secInt) {
  let sum = 0;
  if (
    typeof firstInt === "number" &&
    typeof secInt === "number" &&
    firstInt > -1 &&
    firstInt > secInt
  ) {
    for (let index = firstInt; index >= secInt; index--) {
      sum += index;
    }
  } else if (
    typeof firstInt === "number" &&
    typeof secInt === "number" &&
    firstInt > -1 &&
    firstInt < secInt
  ) {
    for (let index = firstInt; index <= secInt; index++) {
      sum += index;
    }
  } else {
    sum = "ERROR";
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
