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

const answer_list = [
  { answer: "전혀 아니다", answer_uid: "E1", order: 1 },
  { answer: "아니다", answer_uid: "E2", order: 2 },
  { answer: "보통이다", answer_uid: "E3", order: 3 },
  { answer: "그렇다", answer_uid: "E4", order: 4 },
  { answer: "매우 그렇다", answer_uid: "E5", order: 5 },
];

const questions_answers = [
  { questions_uid: "Q1", answer_uid: "E1" },
  { questions_uid: "Q1", answer_uid: "E2" },
  { questions_uid: "Q1", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E1" },
  { questions_uid: "Q2", answer_uid: "E2" },
  { questions_uid: "Q2", answer_uid: "E3" },
  { questions_uid: "Q2", answer_uid: "E4" },
  { questions_uid: "Q3", answer_uid: "E1" },
  { questions_uid: "Q3", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E1" },
  { questions_uid: "Q4", answer_uid: "E2" },
  { questions_uid: "Q4", answer_uid: "E3" },
  { questions_uid: "Q4", answer_uid: "E4" },
  { questions_uid: "Q4", answer_uid: "E5" },
  { questions_uid: "Q5", answer_uid: "E1" },
  { questions_uid: "Q5", answer_uid: "E2" },
  { questions_uid: "Q5", answer_uid: "E3" },
];

// 예상 묶음 데이터
// [
//   [Q1,E1,E2]    -> {questions_uid:Q1, answer_uids:[E1,E2], answer:Q2}
//   [Q2,E1,E2,E3] -> {questions_uid:Q2, answer_uids:[E1,E2,E3]}
//   [Q3,E1,E2]    -> {questions_uid:Q3, answer_uids:[E1,E2]}
//   [Q4,E1,E2,E3,E4,E5] -> {questions_uid:Q4, answer_uids:[E1,E2,E3,E4,E5]}
//   [Q5,E1,E2,E3] -> {questions_uid:Q5, answer_uids:[E1,E2,E3]}
// ]
// 1차 방식 : [Q1, Q2, Q3, Q4, Q5]
// 2차 방식 : Array in Array [[Q1,E1,E2],[Q2,E1,E2,E3]...]
// 3차 방식 : Object in Array [{questions_uid:Q1, answer_uids:[E1,E2], answer:Q2}]
let polls = [];
let question_compare;
let questions = {}; // 내부 묶음
let answer_uids = []; // 내부 설문 답변 묶음
for (let idx = 0; idx < questions_answers.length; idx++) {
  if (question_compare != questions_answers[idx]["questions_uid"]) {
    if (Object.keys(questions).length > 0) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
      questions = {};
      answer_uids = [];
    }

    // console.log(`!= : ${questions_answers[idx]["questions_uid"]}`);
    // console.log(`!= : ${questions_answers[idx]["answer_uid"]}`);
    questions["questions_uid"] = questions_answers[idx]["questions_uid"];
    answer_uids.push(questions_answers[idx]["answer_uid"]);
  } else {
    // console.log(`== : ${questions_answers[idx]["answer_uid"]}`);
    answer_uids.push(questions_answers[idx]["answer_uid"]);
    if (idx + 1 >= questions_answers.length) {
      questions["answer_uids"] = answer_uids;
      polls.push(questions);
    }
  }
  question_compare = questions_answers[idx]["questions_uid"]; // 이전 uid 입력
}

// console.log(`${polls}`);

// 출력
// [
//     {questions_uid:Q1, answer_uids:[E1,E2], answer:Q2},
//     {questions_uid:Q2, answer_uids:[E1,E2,E3]},
//     ...
// ]
// polls[0]["questions_uid"];
// polls[0]["answer_uids"][0];
// polls[0]["answer_uids"][1];

// polls[1]["questions_uid"];
// polls[1]["answer_uids"][0];
// polls[1]["answer_uids"][1];
// polls[1]["answer_uids"][2];

// 설문 문항을 가져오는 function
// Q1. 해당 매장을 방문시 매장은 청결 하였습니까?
// 1. E1
// 2. E2
// Q2. 주문시 직원은 고객님께 친절 하였습니까?
// ...
function getQuestionByUid(question_uid) {
  // 질문항을 반환
  let question_desc = "question not found"; // 매칭되는 값을 찾지 못할 경우라 가정하고 리턴값 초기화
  for (let i = 0; i < questions_list.length; i++) {
    // 배열을 돌면서 매칭되는 값을 찾는다.
    if (questions_list[i]["questions_uid"] == question_uid) {
      //매칭되는 값을 찾았을 경우
      question_desc = questions_list[i]["question"]; // 리턴값을 설정해준다.
    }
  }
  return question_desc; // 찾은 값을 리턴해준다.
}

let i = 0;
for (poll of polls) {
  i++;
  //   console.log(`${poll["questions_uid"]}`); // == polls[idx]
  console.log(`${i}. ${getQuestionByUid(poll["questions_uid"])}`);
  let answer_uids = poll["answer_uids"];
  answer_uids.forEach((answer_uid, index) => {
    console.log(` ${index + 1}. ${answer_uid}`);
  });
}

console.log();
