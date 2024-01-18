// create an array of numbers and take input from the user to add number to this array
// let arr = [1,2,3,4,5]
// let b = prompt("Enter a number")
// b = Number.parseInt(b)

// arr.push(b)
// console.group(arr)

// keep adding numbers to the array untill 0 is added to the array
// var arr2 = [1,2,3,4,5]
// do{
//     var b = prompt("enter a number")
//     b = Number.parseInt(b)
//     arr2.push(b)
//     console.log(arr2)
// }while(b!=0)

// filter for numbers divisible by 10 from a given array
// let arr = [4,5,6,7,8,9,1,2,4,5,7,4,55,40,66,11,22,33,70,88,99]
// let arr2 = arr.filter((a)=>{
//     return a%10==0
// })
// console.log(arr2)

// creat an array of space of given numbers

// use reduce to calculate factorial of given numbers from an array of first n natuaral numbers

let arr = []
let n = prompt("Enter the total length of array")
n = Number.parseInt(n)
do{
    var b = prompt("enter a number")
    b = Number.parseInt(b)
    arr.push(b)
    b++
}while(b<=n)

let ansArr= [];
for(let a in arr){
    ansArr.push(fact(arr[a]))
}

function fact(arr){
    if(arr==0){
        return 1;
    }
    else if(arr<0){
        return null
    }
    else{
        return arr=arr*fact(arr-1)
    }
}

let finalSol = ansArr.reduce((a1,a2)=>{
    return a1+a2
})

console.log(finalSol)

