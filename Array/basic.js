// Declaration of Array
let arr = [];
console.log("arr", arr);
console.log("arr length", arr.length);

// Initialization of Array
let arr1 = [1, 2, 3, 4, 5];
let arr2 = ["a", "b", "c", "d", "e"];
let arr3 = [1.4, 2.0, 24, 5.0, 0.0];

// Types of Arrays on the basis of Size
// 1. Fixed Sized Arrays - No support in JS
// 2. Dynamic Sized Arrays
let arr4 = new Array();
console.log("arr4", arr4);
console.log("arr4 length", arr4.length);

// Types of Arrays on the basis of Dimensions
// 1.  One-dimensional Array(1-D Array)
// 2. Multi-dimensional Array
// - Two-Dimensional Array(2-D Array or Matrix)
let arr5 = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("arr5", arr5);
console.log("arr5 length", arr5.length);
console.log("arr5[0] length", arr5[0].length);
console.log(arr5[1][1]); // 5
