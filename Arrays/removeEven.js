//Solution 1

function removeEven(arr) {
  return arr.filter((v) => v % 2 != 0);
}

console.log("Solution 1", removeEven([1, 2, 3, 4, 5, 6]));

//Solution 2

function removeEven(arr) {
  let odds = [];
  for (element of arr) {
    if (element % 2 != 0) {
      odds.push(element);
    }
  }
  return arr.filter((v) => v % 2 != 0);
}

console.log("Solution 2", removeEven([1, 2, 3, 4, 5, 6]));
