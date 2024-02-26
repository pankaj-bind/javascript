// global scope
var p = "pankaj";
{
    var p = "bind";
    console.log(p)
}
console.log(p)

// block scope
let q = "pankaj";
{
    let q = "bind";
    console.log(q)
}
console.log(q)

// mixed case var-let
var r = "pankaj";
{
    let r = "bind";
    console.log(r)
}
console.log(r)

// mixed case let-var==error
/*
let s = "pankaj";
{
    var s = "bind";
    console.log(s)
}
console.log(s)
*/ 


// redeclartion
var a = "1";
var a = "2" 
a = "3"

let b = "1"
// let b = "2" error
b = "3"

const c = "3"
// const a; you can not left a empty
// c = "4";  error
// const c = "9"; error