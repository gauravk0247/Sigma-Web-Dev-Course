// let obj = {
//     a: "1",
//     b: "Gaurav"
// }
// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// };

// rabbit.__proto__=animal; // sets rabbit.[[Prototype]] = animal

class Animal{
    constructor(name){
        this.name = name;
        console.log("Object is created...")
    }
    eats(){
        console.log("Kha raha hoon")
    }
    jumps(){
        console.log("Kood raha hoon")
    }
}

class Lion extends Animal{
    constructor(name){
        super()
        this.name=name;
        console.log("I am Lion")
    }
    eats(){
        super.eats()
        console.log("Kha raha hoon sinnar mai")
    }
}
let a = new Animal("Bunny");
console.log(a)

let l = new Lion("Shera");
console.log(l)