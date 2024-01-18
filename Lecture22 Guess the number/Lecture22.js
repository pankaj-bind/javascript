// Generate a random number between min (inclusive) and max (inclusive)
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
// Usage example
const randomNumber = getRandomNumber(1, 100);

do{
    var b = prompt("Enter a number")
    b = Number.parseInt(b)
    if(b==randomNumber){
        console.log("you guessed the corret number that is ",randomNumber)
    }
    else{
        console.log("try again")
    }
}while(b!=randomNumber)
