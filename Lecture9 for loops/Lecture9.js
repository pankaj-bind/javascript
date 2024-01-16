// for loop
let sum=0;
let n = prompt("Enter a value: ");
n = Number.parseInt(n)
for(let i=0; i<n; i++){
    sum+=(i+1);
}
console.log("total value is ",sum);

// for in loop
let obj = {
    pankaj:20,
    neeraj:15,
    suraj:21
}
for(let a in obj){
    console.log("marks of ",a," is ",obj[a]);
}

// for of loop
for(let p of "Pankaj"){
    console.log(p);
}