const fs = require('fs');

fs.open(__filename, 'r', (err, fd)=>{
    console.log('fs');
});

setImmediate(()=>{
    console.log('immediate');
});

process.nextTick(()=>{
    console.log('nextTick');
});

new Promise(resolve => {
    resolve('promise1');
}).then(console.log);

console.log('start');