const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.complete);
});

server.listen(3000);
