

let [seconds, minutes, hours] = [0, 0, 0];
let display = document.getElementById("displaytime");

//ye stopwatch ko control krne ke liye use ho rha hai
let timer = null;

function stopwatch() {
    seconds++;
    if (seconds == 60) {
        minutes++;
        seconds = 0;
        if (minutes == 60) {
            minutes = 0;
            hours++;
        }
    }
//agr time 10 se kam hai tb 2 digit dikhate ke liye screen pr ye use hota hai
    let h = hours < 10 ? "0" + hours : hours;
    let m = minutes < 10 ? "0" + minutes : minutes;
    let s = seconds < 10 ? "0" + seconds : seconds;

    display.innerHTML = h + ":" + m + ":" + s;
}

function watchStart() {

    //Agar koi interval pehle se exist karta hai (timer !== null), to clearInterval(timer) ke dwara use clear kar deta hai. 
    //Isse multiple intervals ek sath chalne se bacha jaa sakta hai.
    if (timer !== null) {
        clearInterval(timer);
    }
    timer = setInterval(stopwatch, 1000);
}

function watchStop() {
    //jo time chal rha hai usko rok do
    clearInterval(timer);
}

function watchReset() {
    clearInterval(timer);
    [seconds, minutes, hours] = [0, 0, 0];
    display.innerHTML = "00:00:00";
}
