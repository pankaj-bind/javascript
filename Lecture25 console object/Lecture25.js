console.log("log")
console.assert("err" != false)
console.assert("err" == false)
console.info("info")
console.error("this is error")
console.warn("This is warning")

table={a:1,b:2}
console.table(table)

console.time("loop")
for(let i=0; i<5; i++){
    console.log(i)
}
console.timeEnd("loop")