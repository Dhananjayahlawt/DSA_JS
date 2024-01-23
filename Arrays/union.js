function union(array1, array2) {
  let combine = [...array1, ...array2];
  let unique = new Set(combine);
  let unionArray = Array.from(unique);
  return unionArray;
}

let array1 = [1, 2, 3, 4];
let array2 = [1, 2, 5, 6, 7];
let result = union(array1, array2);
console.log(result);
