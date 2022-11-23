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

const answers = [
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

function findQuestion(questions_uid) {
  // 질문항을 반환
  for (let i = 0; i < questions_list.length; i++) {
    if (questions_list[i]["questions_uid"] == questions_uid) {
      return questions_list[i]["question"];
    }
  }
  return "question not found";
}

function findExample(example_uid) {
  // 답항을 반환
  for (let i = 0; i < example_list.length; i++) {
    if (example_list[i]["example_uid"] == example_uid) {
      return example_list[i]["example"];
    }
  }
  return "example not found";
}

let question_compare;
let idx, answerNo;
let questionNo = 0;
let answerOutput, questionOutput;
let answerHTML, questionHTML;
let display = ``;
let resultDisplay = ``;
let check = [];

function HTMLGenerator(idx, questionNo, answerNo) {
  // 질문번호와 답항을 주면 HTML을 만들어줌
  questionOutput = `${questionNo}. ${findQuestion(
    answers[idx]["questions_uid"]
  )}`;
  questionHTML = `<div>` + questionOutput + `</div>`;

  answerOutput = `(${answerNo}) ${findExample(answers[idx]["example_uid"])}`;
  answerHTML = `<div><label for="uid${idx}"><input type="radio" value="${answers[idx]["example_uid"]}" id="uid${idx}" name="Q${questionNo}" onclick="answer_check(${questionNo},'${answers[idx]["example_uid"]}')" required />${answerOutput}</label></div>`;

  return [questionHTML, answerHTML];
}

function answer_check(questionNo, example_uid) {
  // 유저가 선택한 답항을 기록해둠
  check[questionNo - 1] = `(${example_uid[1]}) ` + findExample(example_uid);
}

function init() {
  // 설문페이지로 돌아간다.
  main.innerHTML = display;
}

function result() {
  // 답변 결과를 표시해주는 페이지로 이동한다.
  main.innerHTML = "";
  resultDisplay = ``;
  for (let i = 1; i <= questionNo; i++) {
    resultDisplay += `${i}. ` + findQuestion(`Q${i}`) + `<br>`;
    resultDisplay += check[i - 1] + "<br><br>";
  }
  main.innerHTML = resultDisplay;
}

// 메인페이지에 질문과 답변을 모아서 html string을 만들어준다
for (idx = 0; idx < answers.length; idx++) {
  if (question_compare == answers[idx]["questions_uid"]) {
    //같은 문항 다른 답항을 만났을때
    answerNo++;
    let outputAnswer = HTMLGenerator(idx, questionNo, answerNo)[1]; //답항
    display += outputAnswer;
  } else {
    if (questionNo != 0) {
      display += "<br>";
    }
    // 새로운 문항을 만났을때
    questionNo++;
    check.push(null); // 질문 숫자만큼 check array 자리가 확보가 된다. 그래서 check[questionNo]로 참조가 가능해진다.
    answerNo = 1;
    let outputQuestion = HTMLGenerator(idx, questionNo, answerNo)[0]; // 문항
    let outputAnswer = HTMLGenerator(idx, questionNo, answerNo)[1]; // 답항
    display += outputQuestion + outputAnswer;
  }

  question_compare = answers[idx]["questions_uid"];
}

let main = document.querySelector("#main");
main.innerHTML = display; //만든 html string을 표시해준다.

let prevButton = document.getElementById("prev_button");
prevButton.addEventListener("click", init); // prev 버튼을 누르면 설문페이지로 돌아간다.
let submitButton = document.getElementById("next_button");
submitButton.addEventListener("click", result); //next 버튼을 누르면 결과페이지로 이동한다.
