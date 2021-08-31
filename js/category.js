let categoriesBtn = document.getElementsByClassName("categories-btn");
for (let i = 0; i < categoriesBtn.length; i++) {
    categoriesBtn[i].addEventListener("click",function(){
        for (let j = 0; j < categoriesBtn.length; j++) {
            if(i != j){
                categoriesBtn[j].style.visibility = "hidden"
            } else {
                choseCategory(categoriesBtn[j]);
            }
        }
        setTimeout(() => {
            location.href = "./questions.html"
        }, 2000);
    })    
}

function choseCategory(btn) {
    let myClass = btn.classList[0];
    localStorage.setItem('category', myClass);
    localStorage.setItem('categoryİnRus',btn.innerText.substr(btn.innerText.indexOf(' ')+1));
}