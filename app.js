const http = require('http');

const server=http.createServer((req,res)=>{
console.log(req.url);
if (req.url === '/home') {
    res.setHeader('Content-Type' ,'text/plain');
    res.write('Welcome home');
    res.end();
  }
 else if (req.url === '/about') {
    res.setHeader('Content-Type' ,'text/plain');
    res.write('Welcome to About Us page');
    res.end();
  }
 else if (req.url === '/node') {
    res.setHeader('Content-Type' ,'text/plain');
    res.write('Welcome to my Node Js project');
    res.end();
  }
else{
res.setHeader('Content-Type', 'text/html');
res.write('<html>');
res.write('<head><title>My First Page</title><head>');
res.write('<body><h1>Hello From My First Node.js Server!<h1></body>');
res.write('</html>');
res.end();
}

});

server.listen(3000);