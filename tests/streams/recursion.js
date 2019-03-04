const init = require('../../tasks/streams/recursion');
const emitter = new (require('events'));

describe('HTTP recursion', () => {
  it('init', (done) => {
    console.log('here');
    let i = 0;
    emitter.on('request', () => {
      i++;
      if (i > 100) done();
    });
    init(emitter);
  });
});