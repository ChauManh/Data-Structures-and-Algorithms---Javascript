let arr = [10, 20, 30, 40];
let element = 50;
console.log("Array before insertion:", arr);

// Insert Element at the Beginning of an Array
// 1. Using Built-In Methods
arr.unshift(element);
console.log("After inserting at the beginning by unshift():", arr);

// 2. Using Custom Method
let arr1 = [10, 20, 30, 40, 0];
let n = 4;
let element1 = 5;

console.log("Array before insertion:", arr1.slice(0, n).join(" "));
for (let i = n - 1; i >= 0; i--) {
  arr1[i + 1] = arr1[i];
}
// Insert new element at the beginning
arr1[0] = element1;
console.log("Array after insertion at the beginning by custom method:", arr1);
