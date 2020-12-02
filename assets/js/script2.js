
// // questions array
// var questions =[ 
//     {
//         question: "1-What is the correct place to insert a JavaScript?", 
//         answer1: ["a-The 'head' section" ,"b-The'body' section","c-Both the 'head' and 'body' section ","d-All of the above"], 
//         correct: "c-Both the 'head' and 'body' section"  
            
//     },    
//     {
//         question: "2-How you can create a function in JavaScript?", 
//         answer2: ["a-function = myFunction()" ,"b-function myFunction()","c-function:myFunction() ","d-All of the above"], 
//         correct: "b-function myFunction()"  
//     }, 
//     {
//        question: "3-To access and HTMl element,what method does the javaScript uses?", 
//        answer3: ["a-toExponential()" , "b-element,addEventListerner(event,function,useCapture" , "c-document.getElementById(id)method" , "d-All of the above"], 
//        correct: "c-document.getElementById(id)method" 

//     }, 
//    {
//         question: "4-How can you add comment in JavaScript?", 
//         answer4: ["a-'comment" ,"b-//comment"  , "c-|| comment ", "d-All of the above"], 
//         correct: "b-//comment"  

//     }  
// ]
//   function renderQuestion()   {
//     questionDiv.textContent= questions[index].question
//     answer1.textContent=questions[index].answer[0]
//     answer2.textContent=questions[index].answer[1]
//     answer3.textContent=questions[index].answer[1+]
//     answer4.textContent=questions[index].answer[1++]
// }


const startingMinutes = 20;
let time = startingMinutes * 60;

const coundownEl = document. getElementById("countdown");

setInterval(updateCountdown, 1000);

function updateCountdown() {
       const minutes = Math.floor(time / 60 );
       let seconds = time % 60;

       second = seconds < 20 ? '0' + seconds : seconds;

       countdownEl.innerHTML =  '$(minutes): (seconds)';
       time--;
}

Screenshot ![GitHub] (/images/(Screen Shot 2.PNG)

source:
How to make a quiz App using HTML CSS-Vanilla javaScript
https://www.youtube.com/watch?v=f4fB9Xg2JEY

https://www.youtube.com/watch?v=f4fB9Xg2JEY&list=RDCMUCsKsymTY_4BYR-wytLjex7A&start_radio=1&t=4188&t=4073
Ho to make a Quiz App using HTML CSS  Vanilla JavaScript Project Beginners Tutorial