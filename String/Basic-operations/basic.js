// In JavaScript, strings characters are stored at contiguous locations (like arrays).

// Declare and initialize the string
let str1 = "Welcome to GeeksforGeeks!";
// Initialization using another method
let str2 = new String("A Computer Science Portal"); // object
// Print strings
console.log(str1);
console.log(str2);
console.log(str2.toString());

// Are Strings Mutable?
let str = "GFG";
str[1] = "f";
console.log(str); // Output: "GFG" (unchanged)
