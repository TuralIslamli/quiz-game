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
       // document.querySelector('.viktorin_question').classList.add('appear');    
    }
  },1000)

 setTimeout(TimerQuiz,5000);

 function TimerQuiz() {
  timerId=setInterval(function() {  
    if(seconds === 0) {
      minutes=minutes-1;
      if(minutes === -1){
        alert("Time out");
        clearInterval(timerId);
        return;
      } else {
        seconds=60;
      }
    }   
    seconds=seconds-1;
    document.querySelector('.timer').textContent=`${minutes}:${seconds>9 ?'':'0'}${seconds}`;
 },1000);
}

  
 



