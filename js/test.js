var categoryName = localStorage.getItem('category')
console.log("categoryName", categoryName)
let script = document.createElement('script');

script.src = 'js/questions/questionsOf' + categoryName + '.js';
document.body.appendChild(script);