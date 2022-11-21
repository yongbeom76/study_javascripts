//  div.inner 태그 내부에 <div>hello</div>를 추가
// 프로그래밍 방식 적용

let queryInner = document.querySelector("#container > .inner");
let element = document.createElement("div");
let helloText = document.createTextNode("hello");

element.appendChild(helloText);
queryInner.appendChild(element);

// innerHTML
let animal = { name: "dog", age: 10 };
let queryApp = document.querySelector("#app");

let item = `<div class="item">${animal["name"]} : ${animal["age"]}</div>`;
queryApp.innerHTML = item;

// 연습문제
const productsData = [
  { title: "감자칩", weight: 300 },
  { title: "칙촉", weight: 100 },
  { title: "고구마칩", weight: 300 },
];

let queryList = document.querySelector("#items");
let insert = ``;
productsData.forEach((element, index) => {
  insert += `<div>title: ${element["title"]} weight: ${element["weight"]}</div>`;
});
console.log(insert);
queryList.innerHTML = insert;
