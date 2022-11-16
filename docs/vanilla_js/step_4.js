const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split(" ").map(Number);

//시험성적
// https://www.acmicpc.net/source/51729588

let a = inputs[0];

// if (a >= 90 && a <= 100) {
//   console.log("A");
// } else if (a >= 80 && a <= 89) {
//   console.log("B");
// } else if (a >= 70 && a <= 79) {
//   console.log("C");
// } else if (a >= 60 && a <= 69) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// 윤년
// https://www.acmicpc.net/source/51730041
if ((a % 4 == 0 && a % 100 != 0) || a % 400 == 0) {
  console.log(1);
} else {
  console.log(0);
}
