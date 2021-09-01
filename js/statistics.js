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
