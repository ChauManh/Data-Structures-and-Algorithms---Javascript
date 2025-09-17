function findChar(s, ch) {
  let n = s.length;
  for (let i = 0; i < n; i++) {
    // If the current character is equal to ch,
    // return the current index
    if (s[i] === ch) return i;
  }

  // If did not find any occurrence of ch,
  // return -1
  return -1;
}

let s = "geeksforgeeks";
let ch = "k";

console.log(findChar(s, ch));
