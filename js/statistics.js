const accordion = document.getElementsByClassName("categories-button");

for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("_active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

/////////////////////////

// function SetStatistics(games, rightAnswers, wrongAnswers) {
//   this.games = games;
//   this.rightAnswers = rightAnswers;
//   this.wrongAnswers = wrongAnswers;
//   this.rating = (this.rightAnswers*100)/(this.games*20); 

// }

// let scienceScore = setStatistics()


// document.getElementsByClassName('science').onclick = function() {
//    let category = localStorage.getItem('category');
// }​;​


