const Events = require('events');
const events = new Events();
const rxjs = require('rxjs');
const {scan} = require('rxjs/operators');
let count = 0;

events.on('count', () => count++);

const { fromEvent } = rxjs;

fromEvent(events, 'count').pipe( scan(count => count + 1, 0) ) .subscribe(count => console.log(`Clicked ${count} times`));

events.emit('count');
events.emit('count');
events.emit('count');