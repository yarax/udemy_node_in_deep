const http = require('http');

function getRequest() {
  return http.request({
    port: 3000,
    hostname: '127.0.0.1',
    path: '/',
    method: 'POST',

  });
}

module.exports = (emitter) => {
  let i = 0;
  const server = http.createServer((req, res) => {
    console.log('Request', ++i);
    emitter.emit('request');
    res.end();
    if (i > 100) return;
    // Paste here piping request result to a new http client request to pass tests
  });
  server.listen(3000);
  const req = getRequest();
  req.write('BODY');
  req.end();
}
