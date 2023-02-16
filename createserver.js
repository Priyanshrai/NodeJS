const http = require('http');

const server = http.createServer((req, res) => {
  console.log("My name is Priyansh");
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello World!');
});

server.listen(4000, () => {
  console.log('Server running at http://localhost:4000/');
});
