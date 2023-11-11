// all DOM elements
var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");


var currentQuestionI = {}
var time = questionsEl.length * 15;
var timerId;
var score = 0;





function startQuiz() {
    
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    
    questionsEl.removeAttribute("class");

    timerId = setInterval(clockTick, 1000);

    timerEl.textContent = time;
    getQuestion();
   
    console.log(landingScreenEl);
}

function getQuestion(){
    var currentQuestion = question[currentQuestionI];

    var titleEl = document.getElementById("Question-title");
    titleEl.textContent = currentQuestion.title;
  // clear out any old question choices
    choicesEl.innerHTML = "";
}