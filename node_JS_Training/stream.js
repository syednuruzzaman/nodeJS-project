const fs = require('fs');

const readstream = fs.createReadStream('./docs/blog3.txt', {encoding: 'utf8'});
const writeStream = fs.createWriteStream('./docs/blog4.txt');

// readstream.on('data', (chunk) => {
//     console.log('----------Newchunk---------');
//     console.log(chunk);
//     writeStream.write('\n New Chunk \n');
//     writeStream.write(chunk);
// });

//Piping
readstream.pipe(writeStream);