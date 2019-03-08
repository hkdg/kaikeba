const fs = require("fs")

// const file1  = fs.createReadStream("./conf.js")
// const file2  = fs.createWriteStream("./conf1.js")

// file1.pipe(file2)
const file1  = fs.createReadStream("./01.png")
const file2  = fs.createWriteStream("./02.png")

file1.pipe(file2)
