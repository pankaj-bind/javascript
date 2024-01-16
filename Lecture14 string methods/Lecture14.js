// string methods

// length
let name = "Pankaj"
console.log(name.length)

// upper case
console.log(name.toUpperCase())

// lower case
console.log(name.toLowerCase())

// slice
console.log(name.slice(1,5))

// slice
console.log(name.slice(4))

// replace
let newName = name.replace("Pankaj", "Neeraj")
console.log(newName)

// concat
let firstName = "Pankaj"
let lastName = "Bind"
let fullName = firstName.concat(" Kumar ", lastName)
console.log(fullName)

// remove white space

let test = "er  "
console.log(test.length)
let newTest= test.trim()
console.log(newTest)
console.log(newTest.length)

// strings are immutable it means if you are changing some values in string then you have to create a new variable


// for loop to print a string
let string = "a quick brown fox jumps over a lazy dog"
for(let i in string){
    console.log(string[i])
}