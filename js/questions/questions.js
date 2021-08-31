function addScript(src){
    let script = document.createElement('script');
    script.src = 'js/questions/questionsOf' + src + '.js';
    // script.async = false;
    document.body.appendChild(script);
}

addScript(localStorage.getItem('category'));
var isArrayInStorage = localStorage.getItem('arrayOfQuestions');
let arrayOfQuestions = JSON.parse(localStorage.getItem('arrayOfQuestions'));
// console.log(localStorage.getItem('arrayOfQuestions'))
document.querySelector("h2").innerText = 'Выбранная категория: ' + localStorage.getItem('categoryİnRus');
//localStorage.clear()

let questionNum = 1;
let playerScore = 0;
let wrongAnswersScore = 0;
let index = 0;
let arr = [];
nextQuestion(0);

function handleQuestions() {
    while (arr.length <= 19) {
        const random = arrayOfQuestions[Math.floor(Math.random() * arrayOfQuestions.length)];
        if (!arr.includes(random)) {
            arr.push(random);
        }
    }
}

function nextQuestion(index) {
    handleQuestions()
    const currentQuestion = arr[index];
    document.getElementsByClassName("question_text")[0].innerText = currentQuestion.title;
}

function checkForAnswer(answer) {
    const currentQuestion = arr[index];
    const currentQuestionAnswer = currentQuestion.isCorrect;
    const trueOption = document.getElementsByClassName("green");
    myAnswer = answer.innerText;
    if (myAnswer == 'Истина') {
        myAnswer = true;
    } else {
       myAnswer = false; 
    }
    if (currentQuestionAnswer == myAnswer) {
        document.getElementsByClassName('question_content')[0].style.backgroundColor = "green";
        playerScore++;
    } else {
        document.querySelector('.question_content').className="question_content";
        void document.querySelector('.question_content').offsetWidth;
        document.querySelector('.question_content').classList.add("shake");
        wrongAnswersScore++;
    }
    index++;
    questionNum++;

    document.querySelector('.right').innerText = playerScore;
    document.querySelector('.wrong').innerText = wrongAnswersScore;

    answer = document.getElementsByClassName('answer');
    for (let i = 0; i < answer.length; i++) {
        answer[i].style.pointerEvents = "none";
    }
}

function handleNextQuestion() {
    (index <= 19) ? nextQuestion(index) : endGame();
    document.getElementsByClassName('question_content')[0].style.backgroundColor = "#DC5866";
     answer = document.getElementsByClassName('answer');
    for (let i = 0; i < answer.length; i++) {
        answer[i].style.pointerEvents = "auto";
    }
}

function endGame() {
    localStorage.setItem('rightAnswers', playerScore);
    localStorage.setItem('wrongAnswers', wrongAnswersScore);
}
