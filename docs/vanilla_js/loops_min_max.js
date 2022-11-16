const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs.readFileSync(filepath).toString().trim().split("\n");
let n = parseInt(inputs[0]);
let b = inputs[1].split(" ").map(Number);

let numbers = { max: -1000000, min: 1000000 };

for (let i = 0; i <= n; i++) {
  if (numbers["max"] < b[i]) {
    numbers["max"] = b[i];
  }
  if (numbers["min"] > b[i]) {
    numbers["min"] = b[i];
  }
}

console.log(numbers["min"], numbers["max"]);
console.log();
