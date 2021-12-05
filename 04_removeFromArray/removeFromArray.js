const removeFromArray = function (array, ...elements) {
  for (let i = 0; i <= elements.length; i++) {
    let index = array.indexOf(elements[i]);
    if (index > -1) {
      array.splice(index, 1);
    } else {
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
