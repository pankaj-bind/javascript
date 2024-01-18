//  loops with array
// simple for loop
var arr = [1,2,3,4,5,6,7,8,9,10];
for(let i=0; i<=arr.length; i++){
    console.log(arr[i])
}

// forEach
arr.forEach((element)=>{
    console.log(element)
}
)

arr.forEach((element, index)=>{
    console.log(element, index)
}
)

arr.forEach((element, index, array)=>{
    console.log(element, index, array)
}
)


// for in
for(let i in arr){
    console.log(arr[i])
}

// for of
for(let i of arr){
    console.log(arr[i])
}