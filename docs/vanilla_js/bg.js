//input.txt
// 3
// 4
// 2
// 5
// 3

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
const input = fs.readFileSync(filepath).toString().split("\n").map(Number);

//문항
const question = [
  {
    questions_num: "1",
    questions: "해당 매장을 방문 시 매장은 청결 하였습니까?",
    orders: 1,
    answer_num: 3,
  },
  {
    questions_num: "4",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    orders: 4,
    answer_num: 5,
  },
  {
    questions_num: "2",
    questions: "주문시 직원은 고객님께 친절 하였습니까?",
    orders: 2,
    answer_num: 4,
  },
  {
    questions_num: "5",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    orders: 5,
    answer_num: 3,
  },
  {
    questions_num: "3",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    orders: 3,
    answer_num: 2,
  },
];

//답항
const answer = [
  { answer_num: "E5", answer: "매우 그렇다", orders: 5 },
  { answer_num: "E1", answer: "전혀 아니다", orders: 1 },
  { answer_num: "E4", answer: "그렇다", orders: 4 },
  { answer_num: "E2", answer: "아니다", orders: 2 },
  { answer_num: "E3", answer: "보통이다", orders: 3 },
];

//문항 답항 정렬
const questionSort = question.sort(function (a, b) {
  return a.orders - b.orders;
});

const answerSort = answer.sort(function (a, b) {
  return a.orders - b.orders;
});

for (let i = 0; i < questionSort.length; i++) {
  printQuestion(i);
  printAnswer(i);
  console.log(`답) (${input[i]})`);
  console.log("\n");
}

console.log("--------------------- 설문자 선택 --------------------------");
for (let i = 0; i < questionSort.length; i++) {
  printQuestion(i);
  printUsersAnswer(`${input[i]}`);
  console.log("\n");
}

console.log("이용해주셔서 감사합니다!");

//------------------------------------함수라인------------------------------------

function printQuestion(i) {
  //문항 출력
  console.log(`${questionSort[i].questions_num}) ${questionSort[i].questions}`);
}

function printAnswer(i) {
  //답항 출력 - 답항 갯수에 맞춰 출력하기 위한 용도
  if (questionSort[i].answer_num == 1) {
    let count = questionSort[i].answer_num;
    for (let i = 0; i < count; i++)
      console.log(`${i + 1}) ${answerSort[i].answer}`);
  } else if (questionSort[i].answer_num == 2) {
    let count = questionSort[i].answer_num;
    for (let i = 0; i < count; i++)
      console.log(`${i + 1}) ${answerSort[i].answer}`);
  } else if (questionSort[i].answer_num == 3) {
    let count = questionSort[i].answer_num;
    for (let i = 0; i < count; i++)
      console.log(`${i + 1}) ${answerSort[i].answer}`);
  } else if (questionSort[i].answer_num == 4) {
    let count = questionSort[i].answer_num;
    for (let i = 0; i < count; i++)
      console.log(`${i + 1}) ${answerSort[i].answer}`);
  } else if (questionSort[i].answer_num == 5) {
    let count = questionSort[i].answer_num;
    for (let i = 0; i < count; i++)
      console.log(`${i + 1}) ${answerSort[i].answer}`);
  }
}

function printUsersAnswer(i) {
  //설문자가 선택한 답항 출력
  console.log(`(${i})${answerSort[i - 1].answer}`);
}
