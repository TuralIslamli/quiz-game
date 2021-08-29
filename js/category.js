let categoriesBtn = document.getElementsByClassName("categories-btn");
for (let i = 0; i < categoriesBtn.length; i++) {
    categoriesBtn[i].addEventListener("click",function(){
        for (let j = 0; j < categoriesBtn.length; j++) {
            if(i != j){
                categoriesBtn[j].style.visibility = "hidden"
            }
        }
        setTimeout(() => {
            location.href = "./questions.html"
        }, 2000);
    })    
}