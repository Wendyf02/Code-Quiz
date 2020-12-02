var startButton = document.getElementById("start-btn");
var answerbuttons = document.getElementsByClassName("answer-Btn")
console.log(startButton)
var questioncontainerEl = document.getElementById("question-container");
var questionDiv = document.querySelector("#question");
var index = 0;
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");


var timeleftDiplay = document.querySelector("#time-left");
var initialBtn = document.querySelector("#initials-btn");
var initialInput = document.querySelector("#initial-input");
var initialEl = document.getElementById("initials");
var scoreDisplay = document.getElementById("high-scores");
var highscores = []
var answerStatusEl = document.getElementById("answer-status");
var selectAnswerTimeout = null

let timeLeft = 20;
let score = 0;
let shufflequestion, currentQuestionIndex


// reset quiz
function resetState() {
  timeLeftDisplay.innerHTML = 20
  timeLeft = 20
  startTimer()
  score = 0
  initialInput.value = ""
  initialBtn.setAttribute("disabled" , correct)
}

// function start quiz
function startQuiz() { 

  console.log("start")

  //  resetState()
   startButton.classList.add("hide")
   scoreDisplay.classList.add("hide")
   questioncontainerEl.classList.remove("hide")
   shuffleQuestions = questions.sort(() => Math.random() - .5)
   currentQuestionIndex = 0
   renderQuestion();
}

// //function to begin next question
// function setNextQuestion() {
//     // change to visible answer
//   while (answer.firstChild) {
//          answer.removeChild
//         (answer.firstChild)
//   }
//       showQuestion(shuffledQuestions[currentQuestionIndex])
//   }
    
    
// function to make render question appear 
function showQuestion(questions) {
  questionDiv.innerText = question.question
  question.answers.forEach(answer  => {
        const button = document.createdElement ("button")
        button.innerText= answer.text
        button.classlist.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answer.appendChild(button)
  })
} 

//shuffle through -question array
function selectAnswer(e) {
    selectedButton = e.target.textContent
    correct = questions[index].correct
    keepScore(correct,selectedButton)
   
   
        if (questions.length > index + 1) {
            index++
          
            renderQuestion()
        } else {
            // stopTimer()
            enterInitials()
           
        }
   
}
  
// score function
function keepScore(Correct,userpick) {
          if(Correct===userpick) {
            answerStatusEl.innerHTML = "correct, one point has been added!" 
              score++
          } else {
            answerStatusEl.innerHTML = "wrong, two seconds have been deducted"
             timeLeft -= 2
          }
}

//save score
function saveScore() {
  var scoreDiv = document.createElement("div")
  scoreDiv.innerHTML = "<h2>" + initialInput.value + "<h2><div>" + score + "</div>"
  document.getElementById("scoreContainer").append(scoreDiv)
  displayScores()
}

// initials function
function enterInitials() {
      initialEl.classList.remove("hide")
      questioncontainerEl.classList.add("hide")
}

//ensure initials are entered before saving
function handleSubmitButtonState() {
         if (initialInput.value) {
              initialBtn.removeAttribute("disabled")
         } else {
              initialBtn.setAttribute("disabled" , correct)
         }
}

//display scores
function displayScores() {
      initialEl.classList.add("hide")
      scoreDisplay.classList.remove("hide")
      startButton.innerText = "restart"
      startButton.classList.remove("hide")

}

function viewScores() {
      stopTimer()
      ClearTimeout(selectAnswerTimeout)
      questioncontainerEl.classList.add("hide")
      displayScores()
}


// questions array
var questions =[ 
  {
      question: "What is the correct place to insert a JavaScript?", 
      answer: ["The 'head' section" ,"The'body' section","Both the 'head' and 'body' section ","All of the above"], 
      correct: "Both the 'head' and 'body' section"  
          
  },    
  {
      question: "How you can create a function in JavaScript?", 
      answer: ["function = myFunction()" ,"function myFunction()","function:myFunction() ","All of the above"], 
      correct: "function myFunction()"   
  }, 
  {
      question: "To access and HTMl element,what method does the javaScript uses?", 
      answer: ["toExponential()" , "element,addEventListerner(event,function,useCapture" , "document.getElementById(id)method" , "All of the above"], 
      correct: "document.getElementById(id)method"

  }, 
 {
      question: "How can you add comment in JavaScript?", 
      answer: ["'comment" ,"//comment"  , "|| comment ", "All of the above"], 
      correct: "//comment"  

  }  
]
function renderQuestion()   {
  questionDiv.textContent=questions[index].question
  answer1.textContent=questions[index].answer[0]
  answer2.textContent=questions[index].answer[1]
  answer3.textContent=questions[index].answer[2]
  answer4.textContent=questions[index].answer[3]
}

// timer variables
var myTimer = null
var timer = function(){
    if(timeLeft <= 0) {
      stopTimer();
      enterInitials();
    }
    const time = --timeLeft
    timeLeftDisplay.innerHTML = time < 0 ? 0 : timeleft
}

// timer function
function startTimer() {
  myTimer = setInterval(timer, 1000)
}

function stopTimer() {
  if (myTimer) {clearInterval(myTimer)}
   timeLeftDisplay.innerHTML = time < 0 ? 0 : timeleft
}






startButton.addEventListener("click", startQuiz)
for (let i = 0; i < answerbuttons.length; i++) {
  answerbuttons[i].addEventListener("click" ,selectAnswer)
  
}
initialBtn.addEventListener("click",saveScore)
initialInput.addEventListener("input", handleSubmitButtonState)
 
  

