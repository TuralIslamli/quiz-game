let accordion = document.getElementsByClassName("categories-button");
let categoryName = localStorage.getItem('category');

document.getElementById(`count_of_Art`).innerText = localStorage.getItem('cntOfArt') || 0;
document.getElementById(`count_of_Geography`).innerText = localStorage.getItem('cntOfGeography') || 0;
document.getElementById(`count_of_Medicine`).innerText = localStorage.getItem('cntOfMedicine') || 0; 
document.getElementById(`count_of_Music`).innerText = localStorage.getItem('cntOfMusic') || 0;
document.getElementById(`count_of_Science`).innerText = localStorage.getItem('cntOfScience') || 0;
document.getElementById(`count_of_Sport`).innerText = localStorage.getItem('cntOfSport') || 0;

document.getElementById(`Art_Right_Ans`).innerText = localStorage.getItem('rightAnsArt') || 0;
document.getElementById(`Geography_Right_Ans`).innerText = localStorage.getItem('rightAnsGeography') || 0;
document.getElementById(`Medicine_Right_Ans`).innerText = localStorage.getItem('rightAnsMedicine') || 0;
document.getElementById(`Music_Right_Ans`).innerText =  localStorage.getItem('rightAnsMusic') || 0;
document.getElementById(`Science_Right_Ans`).innerText = localStorage.getItem('rightAnsScience') || 0;
document.getElementById(`Sport_Right_Ans`).innerText = localStorage.getItem('rightAnsSport') || 0;

document.getElementById(`Art_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsArt') || 0;
document.getElementById(`Geography_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsGeography') || 0;
document.getElementById(`Medicine_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsMedicine') || 0;
document.getElementById(`Music_Wrong_Ans`).innerText =  localStorage.getItem('wrongAnsMusic') || 0;
document.getElementById(`Science_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsScience') || 0;
document.getElementById(`Sport_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsSport') || 0;

document.getElementById(`Art_Rating`).innerText = localStorage.getItem('ratingArt') || 0;
document.getElementById(`Geography_Rating`).innerText = localStorage.getItem('ratingGeography') || 0;
document.getElementById(`Medicine_Rating`).innerText = localStorage.getItem('ratingMedicine') || 0;
document.getElementById(`Music_Rating`).innerText =  localStorage.getItem('ratingMusic') || 0;
document.getElementById(`Science_Rating`).innerText = localStorage.getItem('ratingScience') || 0;
document.getElementById(`Sport_Rating`).innerText = localStorage.getItem('ratingSport') || 0;

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
