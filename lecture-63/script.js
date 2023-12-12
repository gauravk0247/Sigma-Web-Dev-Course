// Arrays are mutable by nature
let arr= [10, 20, 30, 40];
// console.log(arr);
// console.log(arr.length)
// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);
// console.log(arr[3]);

arr[1] = 233;
console.log(arr, typeof arr);

console.log(arr.toString());
console.log(arr.join(" And "));
console.log(arr.pop())
console.log(arr.push(12))
console.log(arr.push("Gaurav"));
console.log(arr.shift()); // --> Remove First element
console.log(arr.unshift("Patil")); // --> Adding the element at first position
// delete arr[2];
console.log(arr);

let a = [1, 2, 4];
let b = [4, 8, 9];
let c = [45, 87, 12];

console.log(a.concat(b, c));
console.log(c.sort());

// let num = [67, 2, 89, 0, 78, 23];
// num.splice(1, 3); // --> remove the element of indexing from 1 to 3
// num.splice(1, 3, 222, 333);
// num.slice(1, 4);
// console.log(num);

let number = [1, 3, 5, 7];
// console.log(number.slice(2));
// console.log(number.slice(1, 3));
console.log(number.reverse());

// String is Immutable by nature
// let str = "Hii Gaurav";

// console.log(str.length);
// console.log(str.replace("H", "B"));
// str = "Hello Gaurav";
// str[0]="P";
// console.log(str);