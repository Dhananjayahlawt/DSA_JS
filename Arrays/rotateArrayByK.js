function reverse(array, start, end) {
  while (start < end) {
    let temp = array[start];
    array[start++] = array[end];
    array[end--] = temp;
  }
}

function RotateByk(array, k, string) {
  if (string === "right") {
    let length = array.length;
    reverse(array, 0, length - k - 1);
    reverse(array, length - k, length - 1);
    reverse(array, 0, length - 1);
  } else {
    let length = array.length;
    reverse(array, 0, k - 1);
    reverse(array, k, length - 1);
    reverse(array, 0, length - 1);
  }
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const k = 3;
RotateByk(array, k, "left");
console.log("After K left Rotate", array);
