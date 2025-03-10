const http = require("http");

const server = http.createServer((req, res) => {
  const url = req.url;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<body>");
    res.write('<form action="message">');
    res.write('<input type="text" />');
    res.write('<button type="submit">Submit</button>');
    res.write("</form>");
    res.write("</body>");
    res.write("</html>");
    return res.end();
  }
  //   res.setHeader("Content-Type", "json");
  res.write("<h1>Message Page!</h1>");
  res.end();
});

server.listen(3000);
