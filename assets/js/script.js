var questions = [
    
    {question: "Commonly used data types DO NOT include:", 
    answers: [
        {text: "strings", correct: false},
        {text: "booleans", correct: false},
        {text: "alerts", correct: true},
        {text: "numbers", correct: false}
    ] },

    {question: "The condition in an 'if/else' statement is enclosed within ______.", 
    answers: [
        {text: "quotes", correct: false},
        {text: "curly brackets", correct: false},
        {text: "parentheses", correct: true},
        {text: "square brackets", correct: false}
    ] },

    {question: "Arrays in Javascript can be used to store ______.",
    answers: [
        {text: "numbers & strings", correct: false},
        {text: "other arrays", correct: false},
        {text: "booleans", correct: false},
        {text: "all of the above", correct: true}
    ] },

    {question: "String values must be enclosed within ______ when being assigned to variables.", 
    answers: [
        {text: "commas", correct: false},
        {text: "curly brackets", correct: false},
        {text: "quotes", correct: true},
        {text: "parantheses", correct: false},
    ] },

    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    answers: [
        {text: "Javascript", correct: false},
        {text: "terminal/bash", correct: true},
        {text: "for loops", correct: false},
        {text: "console.log", correct: false},
    ] }
    ,
];
//getting elements to be used in functions
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');
const timerElement = document.getElementById('timer');

//defining variables
let currentQuestionIndex = 0;
let score = 0;
let time = 60;

//function to start the timer
function timer() {
    var timeInterval = setInterval(function () { 
        if (time > 0) {
            timerElement.innerHTML = 'Timer: ' + time + ' seconds';
            time--;
        } else if (timeLeft === 1) {
            timerElement.innerHTML = 'Timer: ' + time + 'second';
            time--;
        } else {
            timerElement.innerHTML = "Time's up!";
            timerElement.style.display = 'none';
            clearInterval(timeInterval);
        } 
    }, 1000);
}

// function to start quiz and initiate showQuestion function
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();
    timer();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if(isCorrect) {
        selectedBtn.classList.add("correct");
        score ++;
    }else {
        selectedBtn.classList.add("incorrect");
        time -= 10;
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    timerElement.style.display = "none";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length) {
        handleNextButton();
    } else{
        startQuiz();
    }
})
startQuiz();



