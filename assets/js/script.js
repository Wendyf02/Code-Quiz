var startButton = document.getElementById("start-btn");
var startBtn = document.querySelector("#start-btn");

var questioncontainerEl = document.getElementById("question-container");
var questionDiv = document.querySelector("#questions");
var index = 0;
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var timeleftDiplay = document.querySelector("#time-left");
var initialBtn = document.querySelector("#initial-btn");
var initalInput = document.querySelector("#initial-input");
var initialEl = document.getElementById("initials");
var scoreDisplay = document.querySelector("#high scores");
var highscores = []
var answerStatusEl = document.getElementById("answer-status");
var selectAnswerTimeout = null

let timeleft = 10;
let score = 0;
let shufflequestion, currentQuestionIndex



// function start quiz
function startButton() { 
  resetState()
  startButton.classlist.add("hide")
  scoreDisplay.classList.add("hide")
  questioncontainerEl.classlist.remove("hide")
  shuffleQuestions = questions.sort(()=> Math.random() - .5)
  currentQuestionIndex = 0
  questioncontainerEl.classlist.remove("hide")
  setNextQuestion();
}

// function reset
function resetState() {
  timeLeftDisplay.innerHTML = 10
  timeLeft = 10
  startTimer()
  score = 0
  initialInput.value = ""
  initialBtn.setAttribute("disabled" , correct)
}
 
//function to begin next question
function setNextQuestion() {
    // change to visible answer
  while (answer1.answer2,answe3,answer4.firstChild) {
      answer1.answer2,answe3,answer4.removeChild
      (answer1.answer2,answe3,answer4.firstChild)
  }
      showQuestion(shuffledQuestions[currentQuestionIndex])
  }
    
    
// function to make question appear 
function showQuestion(questions) {
  questionDiv.innerContent = question.question
  questions.answers.forEach(answer  => {
        var button = document.createdElement ("button")
        button.innerText = answer.text
        button.classlist.add("btn")
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener("click", selectAnswer)
        answer1.answer2,answer3,answer4.appendChild(button)
  })
} 

//shuffle through -question array
function selectAnswer(e) {
        selectButton = e.target
        correct = selectedButton.dataset.correct
         keepScore(correct) 
         answerStatusEl.inneerHTML = correct ? " correct, one point has been added!" : "wrong, two seconds have been deducted"
         selectAnswerTimeout  = setTimeout(() => {
           if (shuffleQuestions.length > currentQuestionIndex + 1) {
             currentQuestionIndex++
             answerStatus.innerHTML = ""
             setNextQuestion()
           } else {
             stopTimer()
               enterInitials()
               answerStatus.innerHTML = ""
           }
         }, 1000)
}

// questions array
var questions =[ 
    {
      question: "1-What is the correct place to insert a JavaScript?", 
      answer1: ["The 'head' section" ,"The'body' section","Both the 'head' and 'body' section ","All of the above"], 
      correct: "Both the 'head' and 'body' section"  
    }     
]

function renderquestion()   {
  questionDiv.textContent= questions[index].question
  answer1.textContent=questions[index].answer[0]
}

var questions =[ 
  {
    question: "2-How you can create a function in JavaScript?", 
    answer2: ["function = myFunction()" ,"function myFunction()","function:myFunction() ","All of the above"], 
    correct: "function myFunction()"  
  }  

  function renderquestion()   {
    questionDiv.textContent= questions[index].question
    answer2.textContent=questions[index].answer[1]
}

  var questions =[ 
    {
      question: "3-To access and HTMl element,what method does the javaScript uses?", 
      answer3: ["toExponential()" , "element,addEventListerner(event,function,useCapture" , "document.getElementById(id)method" , "All of the above"], 
      correct: "document.getElementById(id)method" 

    }  

function renderquestion()   {
    questionDiv.textContent= questions[index].question
    answer3.textContent=questions[index].answer[1+]
}


var questions =[ 
  {
    question: "4-How can you add comment in JavaScript?", 
    answer4: ["'comment" ,"//comment"  , "|| comment ", "All of the above"], 
    correct: "//comment"  

  }  

  function renderquestion()   {
    questionDiv.textContent= questions[index].question
    answer4.textContent=questions[index].answer[1++]
}


// timer variables

var myTimer = null
var timer = function() {
    if(timeLeft <= 0) {
      stopTimer();
      enterInitials();
    }
    time = timeLeft
    timeLeftDisplay.innerHTML = time < 0 ? 0 : timeleft
}


// timer function
function keepScore(isCorrect) {
         if (isCorrect) {
           score++
         } else {  
           timeleft -= 2
         }
    }


// score function




  // initials function




  //save score




  //ensure initials are entered before saving





  //display scores




  