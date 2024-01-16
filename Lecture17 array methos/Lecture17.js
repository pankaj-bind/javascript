// array methods
let arr =[80,90,88,81,99,100]

// toString, array-->string
console.log(arr.toString())

// join(), array to string using a separator
console.log(arr.join("_"))

// pop(), remove last element
console.log(arr.pop())
console.log(arr)

// push(), add last element
console.log(arr.push(101))
console.log(arr)

// shift(), remove first element
console.log(arr.shift())
console.log(arr)

// unshift(), add first element
console.log(arr.unshift(80))
console.log(arr)

// concat, join array
let b = [1,2,3,4,5,6,4,5]
console.log(arr.concat(b))