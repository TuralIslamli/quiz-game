let accordion = document.getElementsByClassName("categories-button");
let categoryName = localStorage.getItem('category');

document.getElementById(`count_of_Art`).innerText = localStorage.getItem('cntOfArt');
document.getElementById(`count_of_Geography`).innerText = localStorage.getItem('cntOfGeography');
document.getElementById(`count_of_Medicine`).innerText = localStorage.getItem('cntOfMedicine');
document.getElementById(`count_of_Music`).innerText = localStorage.getItem('cntOfMusic');
document.getElementById(`count_of_Science`).innerText = localStorage.getItem('cntOfScience');
document.getElementById(`count_of_Sport`).innerText = localStorage.getItem('cntOfSport');

document.getElementById(`Art_Right_Ans`).innerText = localStorage.getItem('rightAnsArt')
document.getElementById(`Geography_Right_Ans`).innerText = localStorage.getItem('rightAnsGeography')
document.getElementById(`Medicine_Right_Ans`).innerText = localStorage.getItem('rightAnsMedicine')
document.getElementById(`Music_Right_Ans`).innerText =  localStorage.getItem('rightAnsMusic')
document.getElementById(`Science_Right_Ans`).innerText = localStorage.getItem('rightAnsScience')
document.getElementById(`Sport_Right_Ans`).innerText = localStorage.getItem('rightAnsSport')

document.getElementById(`Art_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsArt')
document.getElementById(`Geography_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsGeography')
document.getElementById(`Medicine_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsMedicine')
document.getElementById(`Music_Wrong_Ans`).innerText =  localStorage.getItem('wrongAnsMusic')
document.getElementById(`Science_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsScience')
document.getElementById(`Sport_Wrong_Ans`).innerText = localStorage.getItem('wrongAnsSport')

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
