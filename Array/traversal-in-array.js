// Examples:
// Input: arr[] = [10, 20, 30, 40, 50]
// Output: "10 20 30 40 50 "
// Explanation: Just traverse and print the numbers.

// Types of Array Traversal
// 1. Linear Traversal
// Time Complexity: O(n)
// Auxiliary Space: O(1)
const arr = [1, 2, 3, 4, 5];
process.stdout.write("Linear Traversal: ");
for (let i = 0; i < arr.length; i++) {
  process.stdout.write(arr[i] + " ");
}

// 2. Reverse Traversal
// Time Complexity: O(n)
// Auxiliary Space: O(1)
console.log();
process.stdout.write("Reverse Traversal: ");
for (let i = arr.length - 1; i >= 0; i--) {
  process.stdout.write(arr[i] + " ");
}

// Methods of Array Traversal
const arr1 = [10, 20, 30, 40, 50];
// 1. Using For Loop

// 2. Using While Loop
let i = 0;
console.log();
process.stdout.write("Using while loop: ");
while (i < arr1.length) {
  process.stdout.write(arr1[i] + " ");
  i++;
}

// 3 . Using for...of Loop
// Duyệt trực tiếp qua giá trị của mảng.
// Ngắn gọn, nhưng không lấy index trực tiếp (nếu cần index thì dùng .entries()).
// for (let value of arr) {
//   console.log(value);
// }
// // Lấy cả index và value
// for (let [i, v] of arr.entries()) {
//   console.log(i, v);
// }

// 4. Using for...in Loop
// Duyệt qua key (chỉ số).
// Thường dùng cho object, không khuyến khích cho mảng vì có thể lặp luôn cả property mở rộng.
// for (let i in arr) {
//   console.log(i, arr[i]); // i là string
// }

// 5. Using Foreach Loop (Range-based For Loop)
// Nó nhận vào một callback function, và sẽ gọi callback đó một lần cho mỗi phần tử trong mảng.
// Trả về UNDEFINED
// Callback này nhận 3 tham số:
// value: giá trị phần tử.
// index: chỉ số phần tử.
// array: chính cái mảng gốc (ít khi dùng).
console.log();
process.stdout.write("Traversal using foreach loop: ");
arr1.forEach((value, index, array) => {
  process.stdout.write(value + " ");
});

// 6. Using Map Function
// Tạo ra một mảng mới bằng cách áp dụng hàm cho mỗi phần tử của mảng gốc.
// Không thay đổi mảng gốc.
// Trả về một mảng MỚI
// Callback này nhận 3 tham số:
// value: giá trị phần tử.
// index: chỉ số phần tử.
// array: chính cái mảng gốc (ít khi dùng).
console.log();
process.stdout.write("Traversal using map function: ");
const newArrray = arr1.map((value) => value + 5);
newArrray.map((value) => {
  process.stdout.write(value + " ");
});

// 7. Using filter()
// Dùng để lọc các phần tử thỏa điều kiện → trả về mảng mới.
// Không thay đổi mảng gốc.
// arr.filter(callback(element, index, array), thisArg);
// callback chạy cho từng phần tử, trả về true (giữ lại) hoặc false (loại bỏ).
// element: giá trị phần tử hiện tại
// index: chỉ số phần tử
// array: chính mảng gốc
// thisArg (optional): giá trị this trong callback.
console.log();
process.stdout.write("Traversal using filter function: ");
const newArrray1 = arr1.filter((value, index) => {
  return value % 2 === 0;
});
newArrray1.forEach((value) => {
  process.stdout.write(value + " ");
});

// 8. Using reduce()
// Dùng để "rút gọn" mảng thành một giá trị duy nhất (number, string, object, v.v...).
// Không thay đổi mảng gốc.
// arr.reduce(callback(accumulator, currentValue, currentIndex, array), initialValue);
// callback: hàm chạy cho từng phần tử.
// accumulator: giá trị tích lũy (giá trị trả về sau mỗi lần gọi).
// currentValue: giá trị phần tử hiện tại.
// index: chỉ số phần tử hiện tại.
// array: mảng gốc.
// initialValue (optional): giá trị khởi tạo cho accumulator. Nếu không có, phần tử đầu tiên của mảng sẽ được dùng làm accumulator ban đầu.
let sum = arr1.reduce((acc, cur) => {
  console.log("acc:", acc, "cur:", cur);
  return acc + cur;
}, 0);
console.log("Sum array when using reduce function:", sum);
