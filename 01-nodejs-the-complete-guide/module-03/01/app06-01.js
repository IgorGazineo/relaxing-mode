const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<form action='message' method='POST'>");
    res.write("<input type='text' />");
    res.write("<button>Enter</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  } else if (url === "/message" && method === "POST") {
    res.statusCode = 302;
    res.setHeader("Location", "/sucess");
    return res.end();
  }
  if (url === "/sucess") {
    res.write("<h1>Sucess!</h1>");
    return res.end();
  }
});

server.listen(3000);
