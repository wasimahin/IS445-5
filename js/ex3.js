let numList = [4, 8, 12, 5, 20];
function arrayInfo(arr) {
  return {
    firstElement: arr[0],
    lastElement: arr[arr.length - 1],
    length: arr.length
  };
}

console.log(arrayInfo(numList));