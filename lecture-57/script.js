let a = 1;
for (let i = 0; i < 10; i++) {
    console.log(a+i);    
}


let obj = {
    name:"Gaurav",
    role:"Developer"
}
for (const key in obj) {
    if (Object.hasOwnProperty.call(obj, key)) {
        const element = obj[key];
        console.log(element);
    }
}

for (const iterator of "object") {
    console.log(iterator);
}

let b = 5;
while (b<=6) {
    console.log(b);
    b++;
}

let c = 1;
do {
    console.log(c);
    c++;
} while (c<=10);

for(let j=1;j<=10;j++){
    console.log(j);
}