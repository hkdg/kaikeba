const buffer1 = Buffer.alloc(10)
buffer1.write("hello hello ffff")
console.log('buffer1',buffer1)


const buffer2 = Buffer.from([10,20,30])
console.log('buffer2',buffer2)

const buffer3 = Buffer.from("123fgdfgf")
console.log("buffer3",buffer3)

console.log("buffer",Buffer.concat([buffer2,buffer3]).toString('ascii'))