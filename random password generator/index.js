const password = document.getElementById("password");
const length = 12;


const number = "1234567890";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const symbol = "~!@#$%^&*()_+-=\|/.,?><";

const allChars = number + symbol + uppercase + lowercase;

function generate(){
    let pass = "";
    pass+= number[Math.floor(Math.random()*number.length)];
    pass+= symbol[Math.floor(Math.random()*symbol.length)];
    pass+= uppercase[Math.floor(Math.random()*uppercase.length)];
    pass+= lowercase[Math.floor(Math.random()*lowercase.length)];
    
    while(pass.length <length){
        pass += allChars[Math.floor(Math.random()*allChars.length)];
    }

    password.value = pass;
 
}