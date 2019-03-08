const express = require("./kexpress.js")
const fs = require("fs")
const path = require("path")
const app = express()

app.get("/",(req,res)=>{
    console.log('req1',req.url)
    fs.readFile(path.resolve('./index.html'),(err,data)=>{
        if(!err){
            res.statusCode = 200
            res.setHeader("Content-type","text/html")
            res.write(data)
            res.end()
        }else{
            res.statusCode = 500
            res.write("index 500")
            res.end()
        }
    })
})
app.get("/index.html",(req,res)=>{
    console.log('req2',req.url)
    fs.readFile(path.resolve('./index.html'),(err,data)=>{
        if(!err){
            res.statusCode = 200
            res.setHeader("Content-type","text/html")
            res.write(data)
            res.end()
        }else{
            res.statusCode = 500
            res.write("index 500")
            res.end()
        }
    })
})
// app.get("/",(req,res)=>{
//     console.log('path',path.resolve('./index.html'))
//     fs.readFile(path.resolve('./index.html'),(err,data)=>{
//         if(!err){
//             res.statusCode = 200
//             res.setHeader("Content-type","text/html")
//             res.write(data)
//             res.end()
//         }else{
//             res.statusCode = 500
//             res.write("index 500")
//             res.end()
//         }
//     })
// })
// app.get("/user",(req,res)=>{
//     fs.readFile('./user.json',(err,data)=>{
//         if(!err){
//             res.statusCode = 200
//             res.setHeader("Content-type","application/json")
//             res.write(data)
//             res.end()
//         }else{
//             res.statusCode = 500
//             res.write("user 500")
//             res.end()
//         }
//     })
// })


app.listen(8080)