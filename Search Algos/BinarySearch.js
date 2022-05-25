// Implement a binary search algorithm.

function binarySearch(array, target) {
  // Write your code here.
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] === target) {
      return mid;
    } else if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}

// Create an array of 20 numbers from 20 to 100.
let testArray = [];
for (let i = 20; i <= 46; i+=2) {
  testArray.push(i);
}

console.log(binarySearch(testArray, 5));

