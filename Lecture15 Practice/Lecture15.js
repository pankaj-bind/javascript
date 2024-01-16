// find length of console.log("pankaj\"".length)
console.log("pankaj\"".length)

// use include, startsWith and endsWith functions
//  include is used to find whether a word exist or not in the string
let a = "Hello may name is Pankaj Kumar Bind"
let  b = "Kumar"
console.log(`The word "${b}" ${a.includes(b) ? 'is' : 'is not '} in the string`)
console.log(a.startsWith("H"))
console.log(a.endsWith("h"))

// write a program to convert a given string
let string = "sjhfhhjGHGHJK"
let newString = string.toLowerCase()
console.log(newString)

// extract amount out of this "Please give Rs. 100"
let String = "Please give Rs. 100"
console.log(String.slice(-3, String.length))

// try to change 4th character of the above string
let newString2 = String.replace(String[3], 'p')
console.log(newString2)

