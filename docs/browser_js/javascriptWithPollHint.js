let fs = require("fs");

// const filepath =
//   process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
// let input = fs.readFileSync(filepath).toString().trim().split("\n").map(Number);

let user_answers = [1, 2, 4, 3, 1];
// for (let i = 0; i < 5; i++) {
//   user_answers[i] = input[i];
// }

const questions_list = [
  {
    question: "해당 매장을 방문시 매장은 청결 하였습니까?",
    questions_uid: "Q1",
    order: 1,
  },
  {
    question: "주문시 직원은 고객님께 친절 하였습니까?",
    questions_uid: "Q2",
    order: 2,
  },
  {
    question: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    questions_uid: "Q3",
    order: 3,
  },
  {
    question: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    questions_uid: "Q5",
    order: 4,
  },
  {
    question: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    questions_uid: "Q4",
    order: 5,
  },
];

const example_list = [
  { example: "전혀 아니다", example_uid: "E1", order: 1 },
  { example: "아니다", example_uid: "E2", order: 2 },
  { example: "보통이다", example_uid: "E3", order: 3 },
  { example: "그렇다", example_uid: "E4", order: 4 },
  { example: "매우 그렇다", example_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", example_uid: "E1" },
  { questions_uid: "Q1", example_uid: "E2" },
  { questions_uid: "Q1", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E1" },
  { questions_uid: "Q2", example_uid: "E2" },
  { questions_uid: "Q2", example_uid: "E3" },
  { questions_uid: "Q2", example_uid: "E4" },
  { questions_uid: "Q3", example_uid: "E1" },
  { questions_uid: "Q3", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E1" },
  { questions_uid: "Q4", example_uid: "E2" },
  { questions_uid: "Q4", example_uid: "E3" },
  { questions_uid: "Q4", example_uid: "E4" },
  { questions_uid: "Q4", example_uid: "E5" },
  { questions_uid: "Q5", example_uid: "E1" },
  { questions_uid: "Q5", example_uid: "E2" },
  { questions_uid: "Q5", example_uid: "E3" },
];

let question_compare;
let idx;
let polls = [];
let questions = []; // questions and answers
for (idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (questions.length > 0) {
      polls.push(questions);
      questions = [];
    }
    questions.push(questions_answers[idx]["questions_uid"]);
    questions.push(questions_answers[idx]["example_uid"]);
    console.log(
      `!= : ${questions_answers[idx]["questions_uid"]}, ${questions_answers[idx]["example_uid"]}`
    );
  } else {
    questions.push(questions_answers[idx]["example_uid"]);
    console.log(
      `== : ${questions_answers[idx]["questions_uid"]}, ${questions_answers[idx]["example_uid"]}`
    );
    if (idx + 1 >= questions_answers.length) {
      polls.push(questions);
    }
  }

  question_compare = questions_answers[idx]["questions_uid"];
}
console.log(`${questions_answers.length}, ${idx}`);

console.log(polls);
console.log();
