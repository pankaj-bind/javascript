console.log("Function Practice");

console.time("f1");
function greet1(name){
    console.log("Hello", name);
}
greet1("Pankaj");
console.timeEnd("f1");

console.time("f2");
const greet2 = function(name){
    console.log("Hello", name);
}
greet2("Pankaj");
console.timeEnd("f2");

console.time("f3");
const greet3 = function greeting(name){
    console.log("Hello", name);
}
greet3("Pankaj");
console.timeEnd("f3");

console.time("f4");
const greet4=(name)=>{
    console.log("Hello", name);
}
greet4("Pankaj");
console.timeEnd("f4");

console.time("f5");
(function (){
    console.log("Hello Pankaj");
})();
console.timeEnd("f5");