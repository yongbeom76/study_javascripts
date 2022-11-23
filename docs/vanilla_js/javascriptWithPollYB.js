// inputs.txt
// 1
// 2
// 1
// 3
// 3

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let questions = {
  Q1: "1. 해당 매장을 방문시 매장은 청결 하였습니까?",
  Q2: "2. 주문시 직원은 고객님께 친절 하였습니까?",
  Q3: "3. 주문하신 음료가 나오기까지 시간이 적당하였습니까?",
  Q4: "4. 직원이 제조한 음료에 대해 맛은 좋았습니까?",
  Q5: "5. 해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
};

let question_id = ["Q1", "Q2", "Q3", "Q4", "Q5"];

let examples = {
  E1: "전혀 아니다",
  E2: "아니다",
  E3: "보통이다",
  E4: "그렇다",
  E5: "매우 그렇다",
};

let example_id = ["E1", "E2", "E3", "E4", "E5"];

let answers = {
  Q1: ["E1", "E2", "E3"],
  Q2: ["E1", "E2", "E3", "E4"],
  Q3: ["E1", "E2"],
  Q4: ["E1", "E2", "E3", "E4", "E5"],
  Q5: ["E1", "E2", "E3"],
};

function num(example_id) {
  switch (example_id) {
    case "E1":
      return "(1)";
    case "E2":
      return "(2)";
    case "E3":
      return "(3)";
    case "E4":
      return "(4)";
    case "E5":
      return "(5)";
    default:
      return "error";
  }
}
let str = "";

function printExamples(example_id) {
  // print answers into str
  str += ` ${num(example_id)} ${examples[example_id]}`;
}

function printAnswers(question_id) {
  answers[question_id].forEach(printExamples);
  console.log(str); // print answers in one line
  str = ""; // empty str
}
function printSurvey(question_id) {
  // 설문지 출력
  console.log(questions[question_id]); // print questions
  printAnswers(question_id); // print answers
  printUserAnswerShort(question_id); // print user answer short
}
function question_id_to_num(question_id) {
  switch (question_id) {
    case "Q1":
      return 1;
    case "Q2":
      return 2;
    case "Q3":
      return 3;
    case "Q4":
      return 4;
    case "Q5":
      return 5;
  }
}
function getExampleID(a) {
  return "E" + a;
}
function printUserAnswer(question_id) {
  //설문자 답변 출력
  index = question_id_to_num(question_id) - 1;
  let exampleId = getExampleID(inputs[index]);
  console.log(`${num(exampleId)} ${examples[exampleId]}`);
}
function printUserAnswerShort(question_id) {
  //설문자 답변 간단하게 출력
  index = question_id_to_num(question_id) - 1;
  let exampleId = getExampleID(inputs[index]);
  console.log(`\n답) ${num(exampleId)}\n`);
}
function printResult(question_id) {
  // 설문자 선택사항 출력
  console.log(questions[question_id]); // print questions
  printUserAnswer(question_id); // print user answer
}

question_id.forEach(printSurvey); // 설문지 출력
console.log(`\n`);
console.log(`---------------- 설문자 선택 -----------------`);
question_id.forEach(printResult); // 설문자 선택사항 출력
console.log(`\n이용해주셔서 감사합니다!`);
