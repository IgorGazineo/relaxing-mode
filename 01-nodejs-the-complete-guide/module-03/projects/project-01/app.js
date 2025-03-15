const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("<h1>Hello World!</h1><p>This is a paragraph</p>");
  })
  .listen(8080);
