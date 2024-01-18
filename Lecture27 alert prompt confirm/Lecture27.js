alert("Enter a value of a")  
let a = prompt("Enter a value here", "246")

a= Number.parseInt(a)

alert("you have entered a type of "+(typeof a))

let write = confirm("do you want to write in document")
if(write){
    document.write(a)
}
else{
    document.write("Please allow me to write")
}