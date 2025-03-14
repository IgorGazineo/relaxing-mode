const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;

  if (url === "/") {
    res.write("<html>");
    res.write("<body>");
    res.write("<form action='second'>");
    res.write('<input type="text" />');
    res.write("<button>Second Page</button>");
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");

    return res.end();
  } else if (url === "/second?") {
    res.write("<h1>Testing!</h1>");
    return res.end();
  }
});

server.listen(3000);
