let categoryName = localStorage.getItem('category');
localStorage.removeItem('arrayOfQuestions');
let script = document.createElement('script');
script.src = 'js/questions/questionsOf' + categoryName + '.js';
document.body.appendChild(script);

let questionNum = 1;
let trueAnswerScore = 0;
let wrongAnswerScore = 0;
let index = 0;
let arr = [];

function incrementWrongAnswers() {
    let answerScore = localStorage.getItem('rightAns' + categoryName);
    function countUp() {
        answerScore ++;
        return answerScore;
    }
    return countUp;
};

let rightAnswersArt = incrementWrongAnswers();
let rightAnswersGeography = incrementWrongAnswers();
let rightAnswersMedicine = incrementWrongAnswers();
let rightAnswersMusic = incrementWrongAnswers();
let rightAnswersScience = incrementWrongAnswers();
let rightAnswersSport = incrementWrongAnswers();

function startTimer(duration, display) {
    var timer = duration,
        minutes, seconds;
    return myTimer = setInterval(function () {
        minutes = parseInt(timer / 60, 10)
        seconds = parseInt(timer % 60, 10);
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;
        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            clearInterval(myTimer);
            document.querySelector(".question_text").innerHTML = 'ВРЕМЯ ВЫШЛО <br><br> ИГРА ОКОНЧЕНА';
            document.querySelectorAll(".hide").forEach((el) => el.style.display = 'none');
            document.querySelector('.timer').style.display = "none";
            endGame();
        }
    }, 1000);
}

const setNewQuestions = () => {
    let isArrayInStorage = localStorage.getItem('arrayOfQuestions');
    let arrayOfQuestions = isArrayInStorage && JSON.parse(isArrayInStorage);
    let isTrueAnswerBtn = document.getElementById('isTrueAnswerBtn');
    let isFalseAnswerBtn = document.getElementById('isFalseAnswerBtn');
    let nextBtn = document.getElementById('next_btn');

    isTrueAnswerBtn.addEventListener("click", function () {
        nextBtn.style.color = "Indigo";
        nextBtn.style.fontSize = "30px"
    });

    isFalseAnswerBtn.addEventListener("click", function () {
        nextBtn.style.color = "Indigo";
        nextBtn.style.fontSize = "30px"
    });

    if (isArrayInStorage) {
        document.querySelector("h2").innerText = 'Выбранная категория: ' + localStorage.getItem('categoryİnRus');
        localStorage.removeItem('rightAnswers');
        localStorage.removeItem('wrongAnswers');
        nextQuestion(0);

        let fiveMinutes = 60 * 3;
        let display = document.querySelector('.timer');
        startTimer(fiveMinutes, display);

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
            myAnswer = answer == 'Истина'
            console.log("checkForAnswer ~ myAnswer", myAnswer)
            if (currentQuestionAnswer == myAnswer) {
                document.getElementsByClassName('question_content')[0].style.backgroundColor = "green";
                trueAnswerScore++;
                eval(`rightAnswers${categoryName}()`);
            } else {
                document.querySelector('.question_content').className = "question_content";
                void document.querySelector('.question_content').offsetWidth;
                document.getElementsByClassName('question_content')[0].style.backgroundColor = "red";
                document.querySelector('.question_content').classList.add("shake");
                wrongAnswerScore++;
            }
            index++;
            questionNum++;

            document.querySelector('.right').innerText = trueAnswerScore;
            document.querySelector('.wrong').innerText = wrongAnswerScore;

            answer = document.getElementsByClassName('answer');
            for (let i = 0; i < answer.length; i++) {
                answer[i].style.pointerEvents = "none";
            }
        }
        isTrueAnswerBtn.addEventListener('click', () => checkForAnswer(isTrueAnswerBtn.innerText))
        isFalseAnswerBtn.addEventListener('click', () => checkForAnswer(isFalseAnswerBtn.innerText))

        function handleNextQuestion() {
            if (index <= 19) {
                nextBtn.style.color = "white";
                nextBtn.style.fontSize = "22px"
                nextQuestion(index);
            } else {
                clearInterval(myTimer);
                document.querySelector(".question_text").innerHTML = 'ИГРА ОКОНЧЕНА';
                document.querySelectorAll(".hide").forEach((el) => el.style.display = 'none');
                document.querySelector('.timer').style.display = "none";
                endGame();
            }
            document.getElementsByClassName('question_content')[0].style.backgroundColor = "#DC5866";
            answer = document.getElementsByClassName('answer');
            for (let i = 0; i < answer.length; i++) {
                answer[i].style.pointerEvents = "auto";
            }
        }
        nextBtn.addEventListener('click', handleNextQuestion);
    } else {
        setTimeout(() => {
            setNewQuestions();
        }, 5000);
    }
}

function incrementCounter() {
    let getCounterFromStore = localStorage.getItem('cntOf' + categoryName);
    function countUp() {
        getCounterFromStore++;
        return getCounterFromStore;
    }
    return countUp;
};

let countOfArt = incrementCounter();
let countOfGeography = incrementCounter();
let countOfMedicine = incrementCounter();
let countOfMusic = incrementCounter();
let countOfScience = incrementCounter();
let countOfSport = incrementCounter();

function setToLocalStore() {
    localStorage.setItem('cntOf' + categoryName, eval(`countOf${categoryName}()`));
    localStorage.setItem('rightAns' + categoryName, eval(`rightAnswers${categoryName}() - 1`));
    localStorage.setItem('wrongAns' + categoryName, eval(`20*(countOf${categoryName}()-1) - (rightAnswers${categoryName}() - 2)`));
    localStorage.setItem('rating' + categoryName, eval(`Math.round(100*(rightAnswers${categoryName}()-3)/(20*(countOf${categoryName}()-2))*100)/100`));
}

function endGame() {
    document.querySelectorAll(".hide").forEach((el) => el.style.display = 'none');
    document.querySelector('.timer').style.display = "none";
    document.getElementsByClassName('question_content')[0].style.backgroundColor = "#DC5866";
    setToLocalStore();
}

setNewQuestions();