//Solution 1
function mergeArrays(arr1, arr2) {
  let merged = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      merged.push(arr1[i]);
      i++;
    } else {
      merged.push(arr2[j]);
      j++;
    }
  }
  if (i <= arr1.length - 1) {
    arr1.splice(0, i);
    merged.concat(arr1);
  }
  if (j <= arr2.length - 1) {
    arr2.splice(0, j);
    merged.concat(arr2);
  }
  return merged;
}
let arr1 = [1, 3, 5, 7, 9];
let arr2 = [2, 4, 6, 10];
console.log(mergeArrays(arr1, arr2));

// Solution 2

// function mergeArrays(arr1, arr2) {
//    return [...arr1,...arr2].sort((a,b)=>a-b)

// }
// let arr1=[1,3,5,7,9];
// let arr2=[2,4,6,10];
// console.log(mergeArrays(arr1,arr2))
