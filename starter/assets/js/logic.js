// all DOM elements
var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


var currentQuestionI = 0;
var time = questionsEl.length * 15;
var timerId;




function startQuiz() {
    
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    
    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;
    getQuestion();
   
}

function getQuestion(){
    var currentQuestion = question[currentQuestionI];

    var titleEl = document.getElementById("Question-title");
    titleEl.textContent = currentQuestion.title;

    choicesEl.innerHTML = "";
}