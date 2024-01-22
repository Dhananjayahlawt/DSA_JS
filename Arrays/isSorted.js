let array = [1, 2, 3, 4, 5, 6, 5];
function isSorted(array) {
  for (let index = 0; index < array.length - 1; index++) {
    if (array[index] > array[index + 1]) {
      return false;
    }
  }
  return true;
}
let result = isSorted(array);
console.log("isSorted", result);
