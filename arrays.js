var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray (arrayName, ArrayElement) {
  var newArray = arrayName
  arrayName = (arrayElement, ...arrayName)
  return newArray
}


function destructivelyAddElementToBeginningOfArray (arrayName, ArrayElement) {
  arrayName.unshift (arrayElement);
  return arrayName  
}
