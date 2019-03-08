const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// rl.question('你如何看待 Node.js 中文网？', (answer) => {
//   // TODO：将答案记录在数据库中。
//   console.log(`感谢您的宝贵意见：${answer}`);

//   rl.close();
// });
// rl.on('line',(input)=>{
//     console.log('input',input)
// })
const fs = require('fs')

fs.readFile('test.json',(err,data)=>{
    console.log('data1',JSON.parse(data),typeof data.toString())
    let json = JSON.parse(data)
    json.age1 = 25
    fs.writeFile('test.json',JSON.stringify(json),(err,data)=>{
        console.log('data2',data)
        if(err){
            console.log('err',err)
        }
            

    })
})
