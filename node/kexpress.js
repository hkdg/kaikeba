const http = require("http")
// const {URL} = require("url")
const routes = []
const querystring = require('querystring');
class kexpress{
    get(url,callback){
        routes.push({
            url,
            callback
        })
        // console.log(routes)
    }

    listen(){
        // console.log('routes',routes)
        http.createServer((req,res)=>{
            for(let item of routes){
                let reqQ = req.url.split('?')[0]
                let query = req.url.indexOf('?')!==-1 ? reqQ: req.url  
              
                // console.log('数据',item.url,query,item.url == reqQ)
                if(item.url == reqQ){
                    console.log("进来")
                    item.callback(req,res)
                    return
                }
            }

        }).listen(...arguments)
    }

}

module.exports = function(){
    return new kexpress()
}