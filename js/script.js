   let count=5;
   var IntervalId;
   var timerId;
   let seconds=60;
   let minutes=2;
   isShake=false;
   isTurn=false;

   IntervalId=setInterval(function() {  
    count=count-1;
    document.querySelector(".seconds_till").textContent=count;

    if(count===0) {
        clearInterval(IntervalId);       
        document.querySelector('.viktorin_timer').style.display="none";
        document.querySelector('.viktorin_question').className="blok appear";   
    }
  },1000)



