console.error("This is an error"); // to show an error

// here if you pass true statement then it returns undefined otherwise it returns assertion failed
console.assert(5>53);
console.assert(5<53);
console.assert;

// to clear console
console.clear();

// to get an object in tabular form
const obj = {name:"Pankaj", age:20, height:5.6};
console.table(obj);

// for warning
console.warn("Hey please don't drink soda");

// for information
console.info("This is an important info");

// to check runtime of a process
console.time("a");
for(let i=0; i<=10; i++){
    console.log(i);
}
console.timeEnd("a")