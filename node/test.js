


const http = require("http")
const fs = require("fs")

// import http from "http"
var server = http.createServer(function (req, res) {
    // console.log(req.url)

    const fileName = 'www/'+req.url
    fs.readFile(fileName,function(err,data){
        // console.log(err,data)
        if(err){
            // console.log('err',err)
            res.write("读取有误")
        }else{
            res.write(data)
        }
        res.end()
    })
    
})
server.listen(8080)