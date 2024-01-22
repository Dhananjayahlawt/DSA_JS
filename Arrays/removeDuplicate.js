function removeDuplicates(array) {
  let unique = new Set(array);
  let uniqueArray = Array.from(unique);
  for (let index in uniqueArray) {
    array[index] = uniqueArray[index];
  }
  let length = uniqueArray.length;
  return length;
}

function removeDuplicates2(array) {
  let i = 0;
  for (let j = 1; j < array.length; j++) {
    if (array[i] != array[j]) {
      array[++i] = array[j];
    }
  }
  return i + 1;
}

const array = [1, 2, 3, 4, 4, 5, 5, 6, 7, 8];
let result = removeDuplicates2(array);
console.log(`Unique upto ${result}`, array);
