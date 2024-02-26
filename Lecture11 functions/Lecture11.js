// function

let a = prompt("Enter the value of a: ")
let b = prompt("Enter the value of b: ")
sum(a,b);
function sum(a,b){
    console.log(a+b);
    let c = a+b;
    console.log(typeof c) //return string
}

a=Number.parseInt(a);
b=Number.parseInt(b);
sum(a,b);
function sum(a,b){
    let c = a+b;
    console.log(typeof c) //return number
}

// constant function

const add=(p,q,r)=>{
    return p+q+r;
}
console.log(add(3,5,5));