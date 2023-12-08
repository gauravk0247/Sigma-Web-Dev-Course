function nice(name){
    console.log("Hey "+name+" you are nice!");
    console.log("Hey "+name+" you are good!");
    console.log("Hey "+name+" you are nice!");
    console.log("Hey "+name+" your tshirtis nice!");
}
nice("gaurav");
nice("Krushna");


// function sum(a, b){
//     console.log(a+b);
// }
// sum(3, 5);

function sum(p, q, r=3) {
    return p+q+r;
}
result = sum(10, 20);
result1 = sum(20, 30);
result2 = sum(1, 2, 1);
console.log("The result is "+ result);
console.log("The result is "+ result1);
console.log("The result is "+ result2);

const func =(x)=>{
    console.log("I am arrow function ", x)
}
func(12);
func(30);
func(45);