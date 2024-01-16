// create a var of type string and add a number to it
var s = "Pankaj" + 2;
console.log(s);

// use typeof to check the type of the var
console.log(typeof s);

// create a const object and try to change the value of the object
const car={
    "name":"BMW",
    "year":2023,
    "color":"red"
}
car["color"]="blue";
console.log(car["color"])

// try to add a new key to the object
car["model"]="9";
console.log(car)

// write a program to create a word meaning dictionary
const word={
    bat:"a wooden stick used to hit the ball in cricket",
    ball:"a leather ball used to play cricket",
    wicket:"a wooden structure used to play cricket",
    stump:"a wooden structure used to play cricket",
    run:"a score in cricket"
}
console.log(word.bat)