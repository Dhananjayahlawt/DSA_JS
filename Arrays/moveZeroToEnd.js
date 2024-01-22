function moveZerotoEnd(array) {
  let i = -1;
  for (let j in array) {
    if (array[j] != 0) {
      let temp = array[++i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
}

let array = [0, 1, 2, 0, 2, 0, 4, 5, 6, 0, 9, 0];
moveZerotoEnd(array);
console.log(array);
