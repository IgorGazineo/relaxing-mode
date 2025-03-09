const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/main" || req.url === "/") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Welcome to the <strong>main</strong> page</h1>");
    res.write("<p> You are in our <strong>main</strong> page.</p>");
    res.end();
  } else if (req.url === "/second") {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Welcome to the <strong>second</strong> page</h1>");
    res.write("<p> You are in our <strong>second</strong> page.</p>");
    res.end();
  } else {
    res.setHeader("Content-type", "text/html");
    res.write("<h1>Page not found</h1>");
    res.write("<p> Entrer a valid url.</p>");
    res.end();
  }
  //   process.exit();
});

server.listen(3000);
