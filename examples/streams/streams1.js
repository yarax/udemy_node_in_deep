const fs = require('fs');
const stream = fs.createReadStream('./streams1.js');
stream.on('data', chunk => console.log);
// stream.on('data', chunk => console.log(chunk.toString()));