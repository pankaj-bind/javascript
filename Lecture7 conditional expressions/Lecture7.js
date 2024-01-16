// if
let a = prompt("Enter a value: ");
let b = prompt("Enter next value: ");

if(a==b){
    alert("Both are equal");
}
else if (a!==b) {
    alert("equal type but not equal value");
} else {
    alert("Paagal hai kya")
}

// ternary operator
alert("Process done", (a==b ? "all set" : "all wrong"));