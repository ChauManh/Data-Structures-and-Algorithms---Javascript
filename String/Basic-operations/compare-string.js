// 1. Approach - By Using === Operator
function compareStringsByOperator(str1, str2) {
  return str1 === str2;
}
const s1 = "abc";
const s2 = "abcd";
console.log(
  "Result compare 2 string by Operator:",
  compareStringsByOperator(s1, s2)
); // false

// 2. Approach - By Using String Comparison Functions
// Function to compare two strings using localeCompare
function areStringsSame(s1, s2) {
  return s1.localeCompare(s2) === 0;
}
let s3 = "hello";
let s4 = "hello";
console.log("Result compare 2 string by Function:", areStringsSame(s3, s4)); // true

// 3. Approach - By Writing your Own Method
function compareStringsCustom(str1, str2) {
  if (str1.length !== str2.length) return false;
  for (let i = 0; i < str1.length; i++) {
    if (str1[i] !== str2[i]) return false;
  }
  return true;
}
console.log(
  "Result compare 2 string by Custom Method:",
  compareStringsCustom(s1, s2),
  compareStringsCustom(s3, s4)
);
