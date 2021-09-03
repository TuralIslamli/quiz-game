let categoryName = localStorage.getItem('category');
localStorage.removeItem('arrayOfQuestions');
let script = document.createElement('script');
script.src = 'js/questions/questionsOf' + categoryName + '.js';
document.body.appendChild(script);
////////
// if(localStorage.getItem("statistics"+ categoryName)!= null) {
//     let neededCategoryStatistics = localStorage.setItem("statistics"+ categoryName, JSON.stringify(categoryName+'Obj'));
//     } else {
//     let neededCategoryStatistics = localStorage.getItem("statistics"+ categoryName);
//     }
///////
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
        let questionNum = 1;
        let playerScore = 0;
        let wrongAnswersScore = 0;
        let index = 0;
        let arr = [];
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
            console.log("checkForAnswer ~ answer", answer)
            const currentQuestion = arr[index];
            const currentQuestionAnswer = currentQuestion.isCorrect;
            if (answer == 'Истина') {
                myAnswer = true;
            } else {
                myAnswer = false;
            }
            if (currentQuestionAnswer == myAnswer) {
                document.getElementsByClassName('question_content')[0].style.backgroundColor = "green";
                playerScore++;
            } else {
                document.querySelector('.question_content').className = "question_content";
                void document.querySelector('.question_content').offsetWidth;
                document.getElementsByClassName('question_content')[0].style.backgroundColor = "red";
                document.querySelector('.question_content').classList.add("shake");
                wrongAnswersScore++;
            }
            index++;
            questionNum++;

            document.querySelector('.right').innerText = playerScore;
            document.querySelector('.wrong').innerText = wrongAnswersScore;
            localStorage.setItem('rightAnswers', playerScore);
            localStorage.setItem('wrongAnswers', wrongAnswersScore);

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

setNewQuestions();