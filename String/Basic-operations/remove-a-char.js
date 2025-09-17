// Remove a Character from a Given Position

// 1. Approach - By Using Built-In Methods
function removeCharAtPosition(s, pos) {
  if (pos < 0 || pos >= s.lengtth) return s;
  return s.slice(0, pos) + s.slice(pos + 1);
}
let s = "abcde";
let pos = 1;
console.log(
  "Remove char use Built-In Methods: " + removeCharAtPosition(s, pos)
);

// 2. Approach - By Writing Custome Method
function removeCharAtPositionUsingCustomMethod(s, pos) {
  // Check for valid position
  if (pos < 0 || pos >= s.length) return s;

  // Convert string to array for mutable operations
  let sArr = s.split(""); // "abcde" -> ["a","b","c","d","e"]

  // Shift characters to the left from the position
  for (let i = pos; i < s.length - 1; i++) sArr[i] = sArr[i + 1];

  // Remove the last character
  sArr.pop();

  return sArr.join(""); // Convert array back to string
}
console.log(
  "Remove char use Custome Method:",
  removeCharAtPositionUsingCustomMethod(s, pos)
);
