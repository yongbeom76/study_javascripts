// - object 와 array를 이용해서 화면정의서 대로 출력하기
// - functions: 3개 만들기
// - 답변은 미리 file에 저장된 것을 사용
// - forEach 1회 이상 사용

// —입력
// - 설문 문항사항: object in array- [{문항},{문항},{문항},{문항}]
// - option: orders가 현재 표시된 상태를 순서있게 만드는 것
// - 설문답항 대한 사항 - [{답항},{답항},{답항},{답항}] option: orders가 현재 표시된 상태를 순서있게 만드는 것
// - 답변에 대한 사항 - [1,2,4,3] - 백준입력방식으로

// —처리
// 문항,설문답항, 답변 매칭

// —출력
// answers에 나온대로 출력해야 한다.
// 매칭 출력

const fs = require("fs");

const filepath =
  process.platform === "linux" ? "/dev/stdin" : "docs/vanilla_js/input.txt";
let inputs = fs
  .readFileSync(filepath)
  .toString()
  .trim()
  .split("\n")
  .map(Number);

let questions_list = [
  {
    questions_uid: "Q1",
    questions: "해당 매장을 방문시 매장은 청결 하였습니까?",
    orders: 1,
  },
  {
    questions_uid: "Q4",
    questions: "직원이 제조한 음료에 대해 맛은 좋았습니까?",
    orders: 4,
  },
  {
    questions_uid: "Q2",
    questions: "주문시 직원은 고객님께 친절 하였습니까?",
    orders: 2,
  },
  {
    questions_uid: "Q5",
    questions: "해당 매장을 다음에도 재방문 하실 의향이 있으십니까?",
    orders: 5,
  },
  {
    questions_uid: "Q3",
    questions: "주문하신 음료가 나오기까지 시간이 적당하였습니까?",
    orders: 3,
  },
];

let answers = [
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

let example_list = [
  { example_uid: "E5", example: "매우 그렇다", orders: 5 },
  { example_uid: "E1", example: "전혀 아니다", orders: 1 },
  { example_uid: "E4", example: "그렇다", orders: 4 },
  { example_uid: "E2", example: "아니다", orders: 2 },
  { example_uid: "E3", example: "보통이다", orders: 3 },
];

// 정렬
questions_list.sort((a, b) => {
  return a["orders"] - b["orders"];
});
example_list.sort((a, b) => {
  return a["orders"] - b["orders"];
});

// 처리
function printQuestions() {
  for (let i = 0; i < questions_list.length; i++) {
    console.log(
      `${questions_list[i]["orders"]}. ${questions_list[i]["questions"]}`
    );
  }
}

// 출력
// 질문출력
printQuestions();
// 답변항 출력
// 유저 답 출력
// --- 설문자 선택 ---
// 질문출력
// 유저 답 출력

console.log();
