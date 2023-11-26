// all DOM elements
var scoreEl = document.querySelector("#score");
var timerEl = document.querySelector("#timer");
var startBtn = document.querySelector("#start");
var questionsEl = document.querySelector("#questions");
var initialsEl = document.querySelector("#initials");
var feedbackEl = document.querySelector("#feedback");
var timeEl = document.querySelector("#time");
var choicesEl = document.querySelector("#choices");
var currentQuestionI = 0;
var time = questions.length * 15;
var timerId;
var score = 0;
var secondsLeft = 60;

// creating the time function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + "seconds";
    
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
// show scores instead
            sendMessage();
        }
    }, 1000);
}

function startQuiz() {
    
    var landingScreenEl = document.getElementById("start-screen");
    landingScreenEl.setAttribute("class", "hide");
    
    questionsEl.removeAttribute("class");

   // timerId = setInterval(clockTick, 1000);

    timeEl.textContent = time;

   
    getQuestions();
   
    
}
function changeQuestion(event) {


    var selectedAnswer = event.target.textContent

    alert(selectedAnswer)

    // compare with the correct answer using if statement
    if (this.value !== questions[currentQuestionI].answer) {
        // penalize time
        time -= 15;
    
        if (time < 0) {
          time = 0;
        
    }
    // display new time on page
    timerEl.textContent = time;
    feedbackEl.textContent = "Wrong!";
    
  } else {
    feedbackEl.textContent = "Correct!";
    
  }


    }
    currentQuestionI++;
    getQuestions()

function getQuestions(event){
   // event.preventDefault()
    var currentQuestion = questions[currentQuestionI];

    var titleEl = document.getElementById("question-title");
    titleEl.textContent = currentQuestion.name;
    choicesEl.innerHTML= "";

    var btn1 = document.createElement("button");
    btn1.textContent = currentQuestion.options[0];
    btn1.addEventListener("click", changeQuestion )
    choicesEl.append(btn1);

    var btn2 = document.createElement("button");
    btn2.textContent = currentQuestion.options[1];
    btn2.addEventListener("click", changeQuestion )
    choicesEl.append(btn2);

    var btn3 = document.createElement("button");
    btn3.textContent = currentQuestion.options[2];
    btn3.addEventListener("click", changeQuestion )
    choicesEl.append(btn3);

    var btn4 = document.createElement("button");
    btn4.textContent = currentQuestion.options[3];
    btn4.addEventListener("click", changeQuestion )
    choicesEl.append(btn4);
}
//add listener to start button
startBtn.addEventListener("click", startQuiz)