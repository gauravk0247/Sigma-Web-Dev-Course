const fs = require("fs")

console.log("Starting")
// fs.writeFileSync("gaurav.txt", "Gaurav start his hard journey")


fs.writeFile("gaurav2.txt", "Gaurav start his journey from sigma development", ()=>{
    console.log("done")
    fs.readFile("gaurav2.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("gaurav.txt", "carrierfinal", (e, d)=>{
    console.log(d)
})
console.log("ending")