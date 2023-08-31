// var startButton = document.querySelector('.start-button')
// var quizStart = document.querySelector('.quiz-start')
// var timer = document.querySelector('#time')
// var questionEl = document.querySelector('.question')
// var answerButtons = document.getElementById('answer-buttons')
// var quizBox = document.querySelector('.quiz-box')
// var correctAnswer = document.getElementById('right');
// var wrongAnswer = document.getElementById('wrong');


// var questionIndex = 0
// var score = 0;
// var timeLeft = 100;

// var questionsAsked = [
    
//     {question: "Commonly used data types DO NOT include:", 
//     options: ["strings", "booleans", "alerts", "numbers"], 
//     answer: "alerts"},

//     {question: "The condition in an 'if/else' statement is enclosed within ______.", 
//     options: ["quotes", "curly brackets", "parentheses", "square brackets"], 
//     answer: "parentheses"},

//     {question: "Arrays in Javascript can be used to store ______.", 
//     options: ["numbers & strings", "other arrays", "booleans", "all of the above"],
//     answer: "all of the above"},

//     {question: "String values must be enclosed within ______ when being assigned to variables.", 
//     options: ["commas", "curly brackets", "quotes", "parantheses"], 
//     answer: "quotes"},

//     {question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
//     options: ["Javascript", "terminal/bash", "for loops", "console.log"], 
//     answer: "terminal/bash"}
// ];


// startButton.addEventListener('click', function () {

//     timer.style.display = 'flex';
//     quizStart.style.display = 'block';
//     startButton.style.display = 'none';

//     var timeInterval = setInterval(function () { 
//         if (timeLeft > 0) {
//             timer.textContent = 'Time: ' + timeLeft + ' seconds';
//             timeLeft--;
//         } else if (timeLeft === 1) {
//             timer.textContent = 'Time ' + timeleft + 'second';
//             timeLeft--;
//         } else {
//             timer.textContent = "Time's up!";
//             quizStart.style.display = 'none';
//             clearInterval(timeInterval);
//         } 
//     }, 1000);

//     showQuestion();
// }
// )

// function showQuestion() {
//     var currentQuestion = questionsAsked[questionIndex];
//     var questionNum = questionIndex + 1;
//     questionEl.innerHTML = questionNum + ". " + currentQuestion.question;

//     answerButtons.innerHTML = '';

//     currentQuestion.options.forEach(function (option) {
//         var button = document.createElement("button");
//         button.innerHTML = option;
//         button.classList.add("btn");
//         answerButtons.appendChild(button);
//         correctAnswer.style.display = 'none';
//         wrongAnswer.style.display = 'none';
//         if (option === currentQuestion.answer) {
//             button.dataset.correct = true;
//         }
//         button.addEventListener("click", selectAnswer);
//     });

//     setTimeout(showQuestion, 2000)
// }

// function selectAnswer(event) {
//     var selectedButton = event.target;
//     var correct = selectedButton.dataset.correct === "true";

//     if (correct) {
//         score++; // Increment the score if the answer is correct
//         correctAnswer.style.display = 'flex';
//     }
//     else {
//         timeleft -= 10;
//         wrongAnswer.style.display = 'flex';
//     }

//     questionIndex++; // Move to the next question
//     if (questionIndex < questionsAsked.length) {
//         showQuestion(); // Display the next question
//     } else {
//         // Quiz is finished
//         quizBox.style.display = 'none';
//         correctAnswer.style.display = 'none';
//         wrongAnswer.style.display = 'none';
//         // You can do something here to display the user's score or other results
//     }
// }

