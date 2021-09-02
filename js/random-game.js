let randomBtn = document.getElementsByClassName("main__btn");
const arrCtgr = [
    ["Science","Наука"],
    ["Art","Искусство"],
    ["Sport","Спорт"],
    ["Music","Музыка"],
    ["Medicine","Медицина"],
    ["Geography","География"]
];
let randomNum = Math.floor(Math.random() * arrCtgr.length);
randomBtn[0].addEventListener("click", function () {
    this.classList.add(arrCtgr[randomNum][0]);
    randomChoose(this);
    setTimeout(() => {
        location.href = "./questions.html"
    }, 0);
})

function randomChoose(btn) {
    let myClass = btn.classList[1];
    localStorage.setItem('category', myClass);
    localStorage.setItem('categoryİnRus', arrCtgr[randomNum][1]);
}