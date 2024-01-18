// find out runtime difference between for loop and while loop

console.time("for loop")
for(let i=0; i<10; i++){
    console.log(i)
}
console.timeEnd("for loop")

console.time("while loop")
let j = 0
while(j<10){
    console.log(j)
    j++
}
console.timeEnd("while loop")
