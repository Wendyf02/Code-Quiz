var questionDiv = document.querySelector("#question");
var index = 0;
var answer1 = document.querySelector("#answer1");




var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
var inputs = document.querySelector(".inputs")
var totalSeconds = 0;
var secondsElapsed = 0;
var status = "Working";
var interval;





var questions =[ 
    {
      question: " question 1", 
      answer: ["a","b","c","d"], 
      correct: "b"  
    }     
]

function renderquestion()   {
    questionDiv.textContent= questions[index].question
    answer1.textContent=questions[index].answer[0]
}

renderquestion()


