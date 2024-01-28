var timer = 20;
var score = 0;
var hitrn = 0;
function bubble() {
  var clutter = "";
  for (let index = 0; index <= 118; index++) {
    let rn = Math.floor(Math.random() * 10);
    clutter += `<div id="bubble"><p>${rn}</p></div>`;
  }

  document.querySelector("#action").innerHTML = clutter;
}

document.querySelector("#action").addEventListener("click", function (dets) {
  var clickednum = Number(dets.target.textContent);
  if (clickednum === hitrn) {
    increaseScore();
    bubble();
    getNewhit();
  }
});

function Runtimer() {
  setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#box2").textContent = timer;
    } else {
      clearInterval(Runtimer);
      document.querySelector("#action").innerHTML = `<h1>Game Over</h1>`;
    }
  }, 1000);
}

function getNewhit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#box1").textContent = hitrn;
}

function increaseScore() {
  score += 10;
  document.querySelector("#box3").textContent = score;
}

bubble();
Runtimer();
getNewhit();
