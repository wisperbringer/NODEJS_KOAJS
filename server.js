const {Server} = require('http');

const server = Server((req, res)=>{
   switch (req.url){
       case '/shutdown':
           res.end('shutting down');
           console.log("closing, waiting for keep-alive connection to finish");
           server.destroy(()=>{
               console.log('close');
           });
           break;
       default:
           res.end('up and running');
   }
});

const connections = {};
let id = 0;
server.on('connection', conn => {
    id++;
    connections[id] = conn;

    conn.on('close', ()=>{
        delete connections[id];
    });
});

server.on('request', (req, res)=>{
    let conn = req.socket;
    conn.isIdle = false;
    res.on('finish', ()=>{
        conn.isIdle = true;
        conn.emit('idle');
    });
});

server.destroy = function(cb){
    this.close(cb);
    this.isClosing = true;
    for(let key in connections){
        const conn = connections[key];
        if(conn.isIdle){
            conn.destroy();
        }else{
            conn.once('idle', ()=>{conn.destroy()});
        }

    }
};

server.listen(3000);

