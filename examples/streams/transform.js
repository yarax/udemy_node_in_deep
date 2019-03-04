const fs = require('fs');
const stream = fs.createReadStream('./streams1.js');
var Transform = require('stream').Transform;

class MyTransform extends Transform {
  constructor (options) {
    super(options);
  }

  _transform(chunk, enc, cb) {
    cb(new Error('ERROR'), chunk.length.toString());
  }
}

const finalStream = stream.pipe(new MyTransform()).pipe(process.stdout);

finalStream.on('error', (err) => console.log('CAUGHT ERROR', err));
console.log('FINISH');