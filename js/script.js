let count = 5;
var IntervalId;
var timerId;
let seconds = 60;
let minutes = 2;
isShake = false;
isTurn = false;

IntervalId = setInterval(function () {
  count = count - 1;
  document.querySelector(".seconds_till").textContent = count;
  if (count === 0) {
    clearInterval(IntervalId);
    document.querySelector('.viktorin_timer').style.display = "none";
    document.querySelector('.viktorin_question').className = "blok appear";
    document.querySelector(".footer_quote").style.visibility = "visible";
  }
}, 1000)

let quote = document.getElementById("quote");
let author = document.getElementById("author");

const getQuotes = () => {
    $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&lang=ru&format=jsonp&jsonp=?")
    .done((data) => {
      quote.innerText = `“${data.quoteText}”`;
      author.innerText = data.quoteAuthor || "Автор неизвестен.";
    });
}

getQuotes();
setInterval(() => {
    getQuotes();
}, 5000)