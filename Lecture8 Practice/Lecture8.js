// find age does it lies b/w 10 and 20
var a = prompt("enter your age: ");
if(a>10 && a<20){
    alert("you age is "+a);
}
alert("type is "+ typeof a);
// switch case
switch(a){
    case "10":
        alert("You are 10");
        break;
    case "20":
        alert("You are 20");
        break;
    default:
        alert("You are immortal");    
}