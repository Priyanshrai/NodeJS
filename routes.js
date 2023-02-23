const fs = require("fs");
const requesthandler=(req,res)=>{
    const url = req.url;
    const method = req.method;
    if (url === "/") {
      let message = fs.readFileSync("message.txt", "utf8");
      res.write("<html>");
      res.write("<head><title>Message</title><head>");
      res.write(
        `<body><h1>
        ${message}
      </h1><form action='/message' method='POST'> <input type='text' name='message'> <button type='submit'>Send</button></form></body>`
      );
      res.write("</html>");
      return res.end();
    }
    if (url === "/message" && method === "POST") {
      const body = [];
  
      req.on("data", (chunk) => {
        body.push(chunk);
      });
  
      return req.on("end", () => {
        const parsedBody = Buffer.concat(body).toString();
        const message = parsedBody.split("=")[1];
        fs.writeFile("message.txt", message, (err) => {
          res.statusCode = 302;
  
          res.setHeader("Location", "/");
  
          return res.end();
        });
      });
    }
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>My First Page</title><head>");
    res.write("<body><h1>Hello From My First Node.js Server!<h1></body>");
    res.write("</html>");
    res.end();
}
// module.exports=requesthandler;

module.exports ={
    handler:requesthandler,
    someText:'Some hard coded text'
};
// module.exports.handler =requesthandler;
// module.exports.someText='Some hard coded text';

// exports.handler =requesthandler;
// exports.someText='Some hard coded text';