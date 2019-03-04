const fs = require('fs');
const stream1 = fs.createReadStream('./streams2.js');
const stream2 = process.stdout;
stream1.pipe(stream2);