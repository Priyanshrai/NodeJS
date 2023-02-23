const http = require('http');

const server=http.createServer((req,res)=>{
document.write('Priyansh rai');
});

server.listen(4000);