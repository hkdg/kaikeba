const fs = require("fs")
const util = require("util")
const {promisify} = util
const readFile = promisify(fs.readFile)
readFile("./conf.js").then(res=>{
    console.log('res1',res);
    return readFile("./conf.js")
}).then(res=>{
    console.log('res2',res);
})

async function fn(){
    let data =  await readFile("./conf.js")
    console.log('data',data)
}
fn()