const http = require("http")
const path = require("path")
const fs = require("fs")

http.createServer((req,res)=>{
    const {url,method} = req
    console.log('req',url,method)
    if(url == '/index.html' || url == '/'){
        fs.readFile('./index.html',(err,data)=>{
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
        
    }else if(url == '/user'){
        fs.readFile('./user.json',(err,data)=>{
            if(!err){
                res.statusCode = 200
                res.setHeader("Content-type","application/json")
                res.write(data)
                res.end()
            }else{
                res.statusCode = 500
                res.write("user 500")
                res.end()
            }
        })
    }else{
        res.statusCode = 500
        res.write("服务器500")
        res.end()
    }
    
}).listen(8080)