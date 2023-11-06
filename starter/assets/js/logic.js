// all DOM elements
var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var startEl = document.querySelector("#start-screen");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


var currentQuestion = 0;
var time = questionsEl.length * 15;
var timerId;

function startQuiz () {

    //hide inital screen
    startEl.setAttribute("class", "hide");

    questionsEl.removeAttribute("class");

    //start timer
    timerId = setInterval(cloclTick, 1000);
//show starting time
    timerEl.textContent = time;

    getQuestion();

}
