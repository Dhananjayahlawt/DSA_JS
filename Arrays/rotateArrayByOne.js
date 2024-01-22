function leftRotateByOne(array) {
  let temp = array[0];
  for (let index = 0; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }
  array[array.length - 1] = temp;
}

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
leftRotateByOne(array);
console.log("Array after left rotate by one place", array);
