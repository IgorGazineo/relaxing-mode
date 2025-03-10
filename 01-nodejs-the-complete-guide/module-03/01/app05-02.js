const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<form action='sucess' method='POST'>");
    res.write("<input type='text' />");
    res.write("<button>Enter</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }

  res.write("<h1>Your form was submited sucessfuly!</h1>");
  res.end();
});

server.listen(3000);
