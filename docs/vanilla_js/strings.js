// operate number type and string
let number_first = 3;
let string_second = "5";

console.log(number_first + string_second);
// recommend this way
let concate_string = `${number_first}${string_second}`;

string_second = "A";
console.log(number_first + string_second);

// Strings
let animal = "tiger";
console.log(`${animal}`);

let sentence = "  5 2 6  ";
let trims = sentence.trim(); // 공백 제거
let splits = trims.split(" "); // 공백으로 배열 만듬
let maps = splits.map(Number); // 각 배열을 String To Number
// split;
console.log(maps[0] + maps[1] + maps[2]);

let inputs = sentence.trim().split(" ").map(Number);
console.log(inputs[0] + inputs[1] + inputs[2]);
