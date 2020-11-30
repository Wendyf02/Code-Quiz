var startButton = document.querySelector("#start-btn");
var startBtn = document.querySelector("#start-btn");

var questioncontainerEl = document.querySelector("#question-container");
var questionDiv = document.querySelector("#questions");
var index = 0;
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");

var timeleftDiplay = document.querySelector("#time-left");
var initialBtn = document.querySelector("#initial-btn");
var initalInput = document.querySelector("#initial-input");
var initialEl = document.querySelector("#initials");
var scoreDisplay = document.querySelector("#high scores");
var highscores = []
var answerStatusEl = document.querySelector("#answer-status");
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
  while (answer.firstChild) {
         answer.removeChild
        (answer.firstChild)
  }
      showQuestion(shuffledQuestions[currentQuestionIndex])
  }
    
    
// function to make question appear 
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
      answer: ["a-The 'head' section" ,"b-The'body' section","c-Both the 'head' and 'body' section ","d-All of the above"], 
      correct: "c-Both the 'head' and 'body' section"  
          
  },    
  {
      question: "2-How you can create a function in JavaScript?", 
      answer: ["a-function = myFunction()" ,"b-function myFunction()","c-function:myFunction() ","d-All of the above"], 
      correct: "b-function myFunction()"   
  }, 
  {
      question: "3-To access and HTMl element,what method does the javaScript uses?", 
      answer: ["a-toExponential()" , "b-element,addEventListerner(event,function,useCapture" , "c-document.getElementById(id)method" , "d-All of the above"], 
      correct: "c-document.getElementById(id)method"

  }, 
 {
      question: "4-How can you add comment in JavaScript?", 
      answer: ["a-'comment" ,"b-//comment"  , "c-|| comment ", "d-All of the above"], 
      correct: "b-//comment"  

  }  
]
function renderQuestion()   {
  questionDiv.textContent= questions[index].question
  answer1.textContent=questions[index].answer[0]
  answer2.textContent=questions[index].answer[1]
  answer3.textContent=questions[index].answer[2]
  answer4.textContent=questions[index].answer[3]
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




  