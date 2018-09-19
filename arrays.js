var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (array, element) {
  var newArray = array;
  array = (element, ...array);
  return newArray;
}


function destructivelyAddElementToBeginningOfArray (array, element) {
  array.unshift (element);
  return array;
}
