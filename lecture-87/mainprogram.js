import fs from "fs/promises"

let a = await fs.readFile("gaurav.txt")
console.log(a.toString())

let b = await fs.appendFile("gaurav.txt", "This is amazing promise")
console.log(b)