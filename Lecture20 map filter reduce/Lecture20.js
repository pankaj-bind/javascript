// map 

let arr = [1,2,3,4,5,6,7,8,9,10];
arr.map((value)=>{
    console.log(value)
})

console.log("\n")

arr.map((value, index)=>{
    console.log(value, index)
})

console.log("\n")

arr.map((value, index, array)=>{
    console.log(value, index, array)
})

// filter
let arr2 = arr.filter((a)=>{
    return a<6
})
console.log(arr2)
 
// reduce

let arr3 = arr.reduce((h1,h2)=>{
    return h1+h2
})
console.log(arr3) 