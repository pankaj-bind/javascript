// print marks of student marks are in the form of object using for loop
let marks={
    physics:28,
    maths:29,
    chemistry:30,
}
for(let i in marks){
    console.log("marks in ",i, " is ", marks[i]);
}

// print marks using for loop
for(let i=0; i<Object.keys(marks).length; i++){
    console.log("the marks in subject ", Object.keys(marks)[i]," is ",marks[Object.keys(marks)[i]])
}

// write a program to print try again until user enter correct number
let a = prompt("Enter a number: ")
a = Number.parseInt(a)
check(a)
function check(a){
 if(a==5){
    return console.log("you have entered correct number");
 }
 else{
    let a = prompt("Enter a number: ")
    a = Number.parseInt(a)
    return check(a)
 }
}

// write a program to find function of five number
function avg(a,b,c,d,e){
    return (a+b+c+d+e)/5;
}
console.log(avg(1,2,3,4,5));