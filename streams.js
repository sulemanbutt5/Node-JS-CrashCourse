const fs = require('fs')

const readStream = fs.createReadStream('./docs/data3.txt',{encoding:'utf8'})
const writeStream = fs.createWriteStream('./docs/data4.txt')

// readStream.on('data', (chunk) =>
// {
//     console.log("\n\n----CHUNK----\n\n")
//     console.log(chunk.toString())

//     writeStream.write('\n\nNEW CHUNK\n\n')
//     writeStream.write(chunk)

    
// })

//PIPING

readStream.pipe(writeStream)