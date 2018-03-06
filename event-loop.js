const fs = require('fs');

fs.open(__filename, 'r', (err, fd)=>{
    console.log('fs');
});

setImmediate(()=>{
    console.log('immediate');
});

new Promise(resolve => {
    resolve('promise');
}).then(console.log);

process.nextTick(()=>{
    console.log('nextTick');
});

console.log('start');