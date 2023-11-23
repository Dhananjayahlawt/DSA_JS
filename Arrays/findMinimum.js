

//
function findMinimum(arr) {
  arr.sort((a, b) => a - b);
  return arr[0]
}

console.log(findMinimum([1, 3, 4, 3, 2, 2, 33, 2, 1]));


//Solution 2

function findMinimum(arr){
    let currentMinimum=100000000000;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<currentMinimum){
            currentMinimum=arr[i];
        }
    }
    return currentMinimum;
}
console.log(findMinimum([1, 3, 4, 3, 2, 2, 33, 2, 1]));