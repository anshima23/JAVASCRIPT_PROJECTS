let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");


setInterval(()=>{
let currentTime = new Date(); //isshe abhi jo current time hai vo aa jaye ga


//isshe jo abhi time show ho rha hai 00:00:00 uski jgh hai current time set kr do
hrs.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
min.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
sec.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();



},1000)
