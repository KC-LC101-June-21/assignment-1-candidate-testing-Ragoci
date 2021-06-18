const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question;
let correctAnswer = "";
let candidateAnswer = "";
let candidateAnswers =[];
let questions;
let correctAnswers =[
    "Sally Ride", 
    "true", 
    "40", 
    "Trajectory", 
    "3"
];


  // TODO 1.1b: Ask for candidate's name //
function askForName() {
 let name = input.question("Hello, what's your name? ");
  candidateName = name
}
 // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //
questions =[ 
    "1) Who was the first American woman in space? ",
    "2) True or false: 5 kilometer == 5000 meters? ",
    "3) (5 + 3)/2*10= ? ",
    "4) Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
    "5) What is the minimum crew size for the ISS? " 
];

function askQuestion() {
for (let i = 0; i < 5; i++){
   
let userResponse = input.question(questions[i]);
candidateAnswers.push(userResponse);
console.log(`Your Answer is: ${candidateAnswers[i]}
Correct Answer: ${correctAnswers[i]}`)
// console.log(candidateAnswers)
}
}
let finalScore = 0 
function gradeQuiz(candidateAnswers) {

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrect

// inside
for (let i = 0; i < correctAnswers.length; i++){

if (candidateAnswers[i].toLowerCase() === correctAnswers[i].toLowerCase()){

  finalScore = finalScore + 1
  } 
//console.log(finalScore)
// console.log(correctAnswers[i]);
//let i = 0
//mixedArr =[];
//for (let i = 0; i < correctAnswers.length; i++){
// console.log(correctAnswers[i]); 
 
} //mixedArr[i]= [`${i+1}`,questions[i],correctAnswers[i]


  let grade = finalScore/5 *100
console.log(`>>> Overall Grade: ${grade}% (${finalScore} of 5 correct) <<<`);
  
  if (grade >= 80){
    console.log(">>> Status: PASS <<<");
  } else {
    console.log(">>> Status: FAILED <<<");
  }


  return grade;


}

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  console.log("Greetings " + candidateName + "!" )
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};