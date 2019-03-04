const Events = require('events');
const events = new Events();

events.on('my_event', (data) => console.log(data));

events.emit('my_event', {my: 'data'});