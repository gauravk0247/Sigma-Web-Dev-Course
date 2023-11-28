let age = 2;
let grace = 2;

console.log();
if(age-grace>=18){
    console.log("You can drive");
}
else{
    console.log("You can not drive");
}

let a = 50;
let b = 100;
console.log("a + b = ", a+b);
console.log("a - b = ", a-b);
console.log("a * b = ", a*b);
console.log("a / b = ", a/b);
console.log("a ** b = ", a**b);
console.log("a % b = ", a%b);

if(age==18){
    console.log("You are eligible for voting");
}
else if(age>=21){
    console.log("You are eligible for election");
}
else{
    console.log("Wait");
}

// It will only check wheather the value is same or not
let aa = 20;
let bb = "20";
console.log(aa==bb)

// It will only check wheather the value+type is same or not
let aaa = 20;
let bbb = "20";
console.log(aaa===bbb)

// Or Operator
let num = 56;
let num1 = 96;
if(num || num1){
    console.log("Same");
}

// And Operator
if(num && num1){
    console.log("Not Same");
}

let result = num > num1 ? (num+num1) : (num-num1);
console.log(result);