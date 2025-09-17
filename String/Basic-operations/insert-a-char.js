// Given a string s, a character c and an integer position pos, the task is to insert the character c into the string s at the specified position pos.

// 1. Using Built-In Methods
function insertChar(s, c, pos) {
  // s.slice(0, pos) -> cắt chuỗi từ 0 đến pos (không lấy pos)
  // + c -> nối thêm ký tự muốn chèn
  // + s.slice(pos) -> nối phần còn lại từ pos đến hết
  return s.slice(0, pos) + c + s.slice(pos);
}
const s = "Geeks";
console.log(insertChar(s, "A", 3));

// 2. Using Custom Method
function insertCharCustom(s, c, pos) {
  let res = "";
  for (let i = 0; i < s.length; i++) {
    if (i === pos) res += c; // Chèn ký tự c vào vị trí pos
    res += s[i]; // Thêm ký tự hiện tại của chuỗi s vào kết quả
  }
  if (pos >= s.length) res += c;
  return res;
}
console.log("Insert char by custom method:", insertCharCustom(s, "A", 1));
