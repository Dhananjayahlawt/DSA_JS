//Solution 1 Brute force

function findSum(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == value) {
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}

console.log(findSum([1, 3, 43, 56, 2, 3, 4, 98, 78, 65], 6));

//Solution 2

function findSum(arr, value) {
  let first = 0,
    last = arr.length - 1;
  arr.sort((a, b) => (a = b));
  while (first <= last) {
    if (arr[first] + arr[last] == value) {
      return [arr[first], arr[last]];
    } else if (arr[first] + arr[last] < value) {
      first++;
    } else {
      last--;
    }
  }
  return -1;
}

console.log(findSum([1, 3, 43, 56, 2, 3, 4, 98, 78, 65], 6));