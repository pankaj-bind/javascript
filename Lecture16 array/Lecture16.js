// array

let arr =[80,90,88,81,99,100, false, "absent"]
arr[9]=90
console.log(arr)
console.log(arr[1])
console.log(arr[6])
console.log(arr[7])
console.log(arr[8])
console.log(arr.length)

// print all elements using for loop
for(let i=0; i<=arr.length; i++){
    console.log(`marks is subject[${i}] is `+arr[i])
}
