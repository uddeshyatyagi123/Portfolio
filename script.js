const boxes1 = document.getElementById("boxes1");
const boxes2 = document.getElementById("boxes2");
const boxes3 = document.getElementById("boxes3");
const html = document.getElementsByClassName("skills-html ");
const css = document.getElementsByClassName("skills-css ");
const js = document.getElementsByClassName("skills-js ");
const btnn = document.getElementById("btnn");
const div1 = document.getElementById("div1");
var a = "thank you..!";
let i = 0;

boxes1.addEventListener("mouseover", htmlTrans);
boxes2.addEventListener("mouseover", cssTrans);
boxes3.addEventListener("mouseover", jsTrans);
btnn.addEventListener("click", note);

function htmlTrans() {
  html[0].style.width = "90%";
}
function cssTrans() {
  css[0].style.width = "80%";
}
function jsTrans() {
  js[0].style.width = "65%";
}
function note() {
  if (i < a.length) {
    div1.innerHTML += a.charAt(i);
    i++;
    setTimeout(note, 200);
  }
}
