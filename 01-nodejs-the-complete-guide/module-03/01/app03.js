const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/home" && req.method === "GET") {
    console.log(req.headers.host);
  }
  process.exit();
});

server.listen(3000);
