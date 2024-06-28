

function usertern(){
  var us = prompt("Enter your choice").toLowerCase();
  while(us!='rock' && us!='paper' && us!='scissor' ){
    alert("Enter only ROCK,PAPER,SCISSOR");
     us = prompt("Enter your choice");
  }
  return(us);
}


function computertern(){
    var choice = ['rock','paper','scissor'];
    let co = Math.floor(Math.random()*3);
    return choice[co];
}

function  declareresult(user,computer){
  if(user === computer){
    return "TIE";
  }
  else if((user === 'rock' && computer === 'scissor') 
         || (user ==='paper' && computer === 'rock')
         || (user === 'scissor'&& computer ==='paper') ){
            return "you win";
         }
         else{
            return "computer win";
         }
}

function playgame(){
  alert("welcome to ROCK PAPER SCISSOR");
  var user = usertern();
  var computer = computertern();
  alert("You choose" + " "+  user + " "+  "Computer chose" +" "+   computer);
  var result = declareresult(user,computer);
  alert(result);
}