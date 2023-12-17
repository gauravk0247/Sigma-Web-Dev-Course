let arr = [1, 13, 5, 7, 11];
// let newarr = []
// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     newarr.push(element**2);
// }
// console.log(newarr);


// Map() method
let newarr = arr.map((e, index, Arrays)=>{
    return e**2
})
console.log(newarr);


// filter() method
const greaterThanSeven = (e)=>{
    if(e>7){
        return true;
    }
    return false;
}
console.log(newarr.filter(greaterThanSeven));


// filter() method optimized code
// console.log(arr.filter((e)=>{
//     if(e<7){
//         return true;
//     }
//     return false;
// }))

let arr2 = [1, 2, 3, 4, 5, 6];
const red = (a, b) =>{
    return a*b;
}
console.log(arr2.reduce(red));

console.log(Array.from("Gaurav"));