let accordion = document.getElementsByClassName("categories-button");
let categoryName = localStorage.getItem('category')
console.log(categoryName);
let countOfArt = document.getElementById(`count_of_Art`)
let countOfGeography = document.getElementById(`count_of_Geography`)
let countOfMedicine = document.getElementById(`count_of_Medicine`)
let countOfMusic = document.getElementById(`count_of_Music`)
let countOfScience = document.getElementById(`count_of_Science`)
let countOfSport = document.getElementById(`count_of_Sport`)

countOfArt.innerText = localStorage.getItem('cntOfArt');
countOfGeography.innerText = localStorage.getItem('cntOfGeography');
countOfMedicine.innerText = localStorage.getItem('cntOfMedicine');
countOfMusic.innerText = localStorage.getItem('cntOfMusic');
countOfScience.innerText = localStorage.getItem('cntOfScience');
countOfSport.innerText = localStorage.getItem('cntOfSport');

document.getElementById(`Art_Right_Ans`).innerText = localStorage.getItem('rightAnsArt')
document.getElementById(`Geography_Right_Ans`).innerText = localStorage.getItem('rightAnsGeography')
document.getElementById(`Medicine_Right_Ans`).innerText = localStorage.getItem('rightAnsMedicine')
document.getElementById(`Music_Right_Ans`).innerText =  localStorage.getItem('rightAnsMusic')
document.getElementById(`Science_Right_Ans`).innerText = localStorage.getItem('rightAnsScience')
document.getElementById(`Sport_Right_Ans`).innerText = localStorage.getItem('rightAnsSport')

// document.getElementById(`Art_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsArt')
// document.getElementById(`Geography_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsGeography')
// document.getElementById(`Medicine_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsMedicine')
// document.getElementById(`Music_Wrong_Ans`).innerText =  localStorage.getItem('wrongAnsMusic')
// document.getElementById(`Science_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsScience')
// document.getElementById(`Sport_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsSport')
/////////////////

let clickedCategory;
for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
    this.classList.toggle("_active");
    clickedCategory = this.classList[1];

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

////////////////
statisticObj = "statistics"+ clickedCategory+'Obj';
// games = localStorage.getItem('games');
rightAnswers = localStorage.getItem('rightAnswers');
wrongAnswers = localStorage.getItem('wrongAnswers');

// let statisticObj = {
//   games: null,
//   rightAnswers: null,
//   wrongAnswers: null,
//   rating: null,
// }

// function setStatistics(games, rightAnswers, wrongAnswers) {
//   this.games = games;
//   this.rightAnswers = rightAnswers;
//   this.wrongAnswers = wrongAnswers;
//   this.rating = (this.rightAnswers*100)/(this.games*20); 
// }

// setStatistics.call(statisticObj, )

// let scienceScore = setStatistics()


