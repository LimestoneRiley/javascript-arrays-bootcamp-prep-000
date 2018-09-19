var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"];

function addElementToBeginningOfArray (arrayName, arrayElement) {
  var newArray = arrayName
  arrayName = (arrayElement, ...arrayName)
  return newArray
}


function destructivelyAddElementToBeginningOfArray (arrayName, arrayElement) {
  arrayName.unshift (arrayElement);
  return arrayName  
}
