let arr = [1, 13, 5, 7, 11];
let newarr = []
for (let index = 0; index < arr.length; index++) {
    const element = arr[index];
    newarr.push(element**2);
}
console.log(newarr);