var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = array.unshift (element);
  return newArray;
}

function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift (element);
  return array;
}

function addElementToEndOfArray(array, element){
  [...array, element];
}

function destructivelyAddElementToEndOfArray(array, element){
  array = array.push (element);
}

function accessElementInArray(array, index){
  return (array[index]);
}
