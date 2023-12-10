/*Create a faulty calculator using javascript

this faulty calculator does following:
1. It takes two number as input from the User.
2. It performs wrong operation as follows:


+ -------> -
* -------> +
- ------> /
/ ------> **


It performs wrong opweration 10% of the times
*/


let random = Math.random();
console.log(random);
let a = prompt("Enter first number");
let c = prompt("Enter operation");
let b = prompt("Enter second number");

let ibj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**"
}

if(random > 0.1){
    // performs correct calculations
    console.log(`the result is ${a} ${c} ${b}`);
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`);
}
else{
    // performing wrong calculations
    c = obj[c];
    alert(`the result is ${eval(`${a} ${c} ${b}`)}`)
}