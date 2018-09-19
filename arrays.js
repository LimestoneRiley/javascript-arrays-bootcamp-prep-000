var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray(array, element) {
  var newArray = array;
  newArray = newArray.unshift (element);
  return newArray;
  // return (array.unshift (element));
}

function destructivelyAddElementToBeginningOfArray(array, element){
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

function destructivelyRemoveElementFromBeginningOfArray(array){
  array.shift();
  return array;
}

function removeElementFromBeginningOfArray(array){
  return (array.slice(1));
}

function destructivelyRemoveElementFromEndOfArray(array){
  array.pop();
  return (array);
}

function removeElementFromEndOfArray(array){
  return (array.slice(0, array.length - 1));
}
