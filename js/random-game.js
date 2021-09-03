/* Select random questions */
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

/* add quote of the day */
setInterval(() => {
    document.querySelector(".footer_quote").style.visibility = "visible";
}, 1000);

const getQuotes = () => {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=?")
    .done((data) => {
      console.log(data)
      quote.innerText = `“${data.quoteText}”`;
      author.innerText = data.quoteAuthor || "Автор неизвестен.";
    });
}

getQuotes();
setInterval(() => {
    getQuotes();
}, 5000)