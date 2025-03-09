const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.complete);
  process.exit();
});

server.listen(3000);
