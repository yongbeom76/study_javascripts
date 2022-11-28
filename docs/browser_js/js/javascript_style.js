let queryBox1 = document.querySelector("#btn1");
queryBox1.addEventListener("click", (event) => {
  remove(event);
});

function remove() {
  let queryRemove = document.querySelector("#imgbox1");
  queryRemove.style.display = "none";
}

let queryBox2 = document.querySelector("#btn2");
queryBox2.addEventListener("click", (event) => {
  hide(event);
});

function hide() {
  let queryHide = document.querySelector("#imgbox2");
  queryHide.style.visibility = "hidden";
}

let queryBox3 = document.querySelector("#btn3");
queryBox3.addEventListener("click", (event) => {
  reset(event);
});

function reset() {
  document.querySelector("#imgbox1").style.display = "block";
  document.querySelector("#imgbox2").style.visibility = "visible";
}
