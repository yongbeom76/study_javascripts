// 아이템 리스트 클릭시 반응하기
let list = document.getElementById("list");
list.addEventListener("click", (event) => {
  let action = whatToDo(event);
  // 아무 행동도 하지 말지, 행동을 한다면 어느 아이템을 클릭했는지, 지울지 토글할지 등을 파악하는 함수
  // return "no action" - 아무 행동도 하지 않는다.
  // return "delete the item" - 클릭한 아이템을 지운다.
  // return "toggle heart" - 클릭한 하트 아이콘을 토글한다.

  if (action != "no action") {
    // 행동을 한다.
    if (action == "delete the item") {
      // action이 "지우기"이면
      //   해당 아이템을 지운다.
      event.target.parentElement.parentElement.remove();
    } else if (action == "toggle heart") {
      // action이 "토글하기"이면
      //   해당 아이템의 하트 아이콘을 토글한다.
      if (event.target.innerText == "favorite_border") {
        // 텅빈 하트이면 꽉찬 하트로 토글한다.
        event.target.innerText = "favorite";
      } else if (event.target.innerText == "favorite") {
        // 꽉찬 하트이면 텅빈 하트로 토글한다.
        event.target.innerText = "favorite_border";
      }
    }
  }
  console.log(action);
  console.log(event.target);
  console.log(event.target.className);
});

// Add 버튼 누르면 입력내용을 추가해준다.
let newItem = `<div class="list-item">
                    <div class="item-text">장보기</div>
                    <span>
                        <i class="material-icons delete-icon">delete</i>
                    </span>
                    <span>
                        <i class="material-icons heart-icon">favorite_border</i>
                    </span>
                </div>`;
let addButton = document.getElementById("add-button");
addButton.addEventListener("click", addButtonAction); //버튼 누르면 추가 이벤트

//add 버튼 누를시 항목 추가한다.
function addButtonAction(event) {
  console.log(event);
  console.log(event.target);
  let inputText = event.target.previousElementSibling.value; //입력한 내용
  // 입력한 내용으로 아이템을 추가한다.
  insertItem(inputText);
}

// 입력한 내용을 파악했다면 새항목을 추가해준다.
function insertItem(inputText) {
  if (inputText == "") {
    // 빈칸이면 경고창 표시
    alert("문자를 입력해주세요!");
  } else {
    //빈칸이 아니면
    //항목을 추가해준다.
    //#list 안쪽 맨뒤에 html로 새로운 칸을 추가해준다.
    let list = document.getElementById("list");
    list.insertAdjacentHTML("beforeend", newItem); // 칸 추가
    list.lastChild.firstElementChild.innerText = inputText; // 내용 추가
  }
}

// input tag에서 키가 눌렸을때 엔터인지 확인한다.
let enterEvent = document.querySelector("#input-text");
enterEvent.addEventListener("keydown", (event) => {
  console.log(event);
  console.log(event.code);
  if (event.code == "Enter" && event.key != "Process") {
    //한글입력시 이벤트가 두개 생기는 문제 해결. process중인 이벤트는 버리고 key:'Enter'이벤트에만 반응하도록 설정
    console.log("insert item");
    enterAction(event); //엔터키이면 항목추가해준다.
  } else {
    console.log("input event: do nothing");
    console.log(event.data);
  }
});

// 엔터키 입력시 항목축가
function enterAction(event) {
  let inputText = event.target.value; //입력한 내용
  // 입력한 내용으로 아이템을 추가한다.
  insertItem(inputText);
}

function whatToDo(event) {
  // 아무 행동도 하지 말지, 행동을 한다면 어느 아이템을 클릭했는지, 지울지 토글할지 등을 파악하는 함수
  if (event.target.className == "material-icons delete-icon") {
    // 휴지통 아이콘을 클릭하면 "지운다"를 리턴
    return "delete the item";
  } else if (event.target.className == "material-icons heart-icon") {
    // 하트 아이콘을 클릭하면 "토글" 리턴
    return "toggle heart";
  } else {
    return "no action"; // 다른 위치를 클릭하면 "행동안함" 리턴
  }
}
