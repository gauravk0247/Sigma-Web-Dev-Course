// import {a, b, c} from "./mymodule.js"
// console.log(a, b, c)


// import gk from "./mymodule.js"
// console.log(gk)


// by default in present in a function all of the require , module, __dirname, and __filename

// (function(exports, require, module, __filename, __dirname)){
//     // module code actually lives here
// }

const a = require("./mymodule2.js")
console.log(a, __dirname, __filename)