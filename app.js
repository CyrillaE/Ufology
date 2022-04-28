/* Typpewriter effect for Question 1 */

var i = 0;
var txt = "Question 1";
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("demo").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

/* Typpewriter effect for Question 2 */

var i = 0;
var btxt = "Question 2";
var speed = 150;

function typeWriterQuestionTwo() {
  if (b < txt.length) {
    document.getElementById("jsQuestion2").innerHTML += btxt.charAt(i);
    i++;
    setTimeout(typeWriterQuestionTwo, speed);
  }
}

/* Typpewriter effect for Question 3 */

var b = 0;
var ctxt = "Question 3";
var bspeed = 150;

function typeWriterQuestionThree() {
  if (b < txt.length) {
    document.getElementById("jsQuestion3").innerHTML += ctxt.charAt(b);
    b++;
    setTimeout(typeWriterQuestionThree, bspeed);
  }
}

/* Typpewriter effect for Question 4 */

var b = 0;
var dtxt = "Question 4";
var bspeed = 150;

function typeWriterQuestionFour() {
  if (b < txt.length) {
    document.getElementById("jsQuestion4").innerHTML += dtxt.charAt(b);
    b++;
    setTimeout(typeWriterQuestionFour, bspeed);
  }
}

/* Typpewriter effect for Question 5 */

var b = 0;
var etxt = "Question 5";
var bspeed = 150;

function typeWriterQuestionFive() {
  if (b < txt.length) {
    document.getElementById("jsQuestion5").innerHTML += etxt.charAt(b);
    b++;
    setTimeout(typeWriterQuestionFive, bspeed);
  }
}

/* Typpewriter effect for Question 6 */

var b = 0;
var ftxt = "Question 6";
var bspeed = 150;

function typeWriterQuestionSix() {
  if (b < txt.length) {
    document.getElementById("jsQuestion6").innerHTML += ftxt.charAt(b);
    b++;
    setTimeout(typeWriterQuestionSix, bspeed);
  }
}

/* Typpewriter effect for Question 7 */

var b = 0;
var gtxt = "Question 7";
var bspeed = 150;

function typeWriterQuestionSeven() {
  if (b < txt.length) {
    document.getElementById("jsQuestion7").innerHTML += gtxt.charAt(b);
    b++;
    setTimeout(typeWriterQuestionSeven, bspeed);
  }
}

/* Typpewriter effect for Final */

var b = 0;
var htxt = "Your Score";
var bspeed = 150;

function typeWriterFinal() {
  if (b < txt.length) {
    document.getElementById("finalScore").innerHTML += htxt.charAt(b);
    b++;
    setTimeout(typeWriterFinal, bspeed);
  }
}

/* Script for counting score */

function clickCounter() {
  if (typeof Storage !== "undefined") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount) + 1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerText =
      "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML =
      "Sorry, your browser does not support web storage...";
  }
}

// const start = document
//   .getElementById("buttonStart")
//   .onclick(click, localStorage.setItem("clickcount", 0));


let result = localStorage.getItem("clickcount");
let scoretext = document.getElementById("resulttext");

let score = localStorage.clickcount;

scoretext.innerText = `You have a total of \n${result} correct answers out of 7!`;
const flipimg = document.getElementById("Scully");

// Flipping image

function flipimage() {
  if (score > 3) {
    flipimg.src = "Images/Mulder5.png";
  }
}
flipimage();
