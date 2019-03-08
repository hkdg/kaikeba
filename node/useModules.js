
// 内建模块
// const os = require("os")
// 第三方模块
// const cpuStat = require("cpu-stat")

// function showStatistics(){
//     console.log('内存占用率'+os.freemem()/os.totalmem*100+'%')
//     cpuStat.usagePercent(function(err,percent){
//         console.log(`cpu占用率${percent}%`)
//     })
// }
// setInterval(showStatistics,1000)

// 自定义模块
const call = require("./conf.js")(10)

console.log('call',call)

