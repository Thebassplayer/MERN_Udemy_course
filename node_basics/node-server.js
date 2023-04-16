const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  // console.log(req.method);
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2 >Home page</h2>");
    res.end();
  }
  if (req.url === "/about") {
    res.setHeader("Content-Type", "text/html");
    res.write("<h2 >About page</h2>");
    res.end();
  }
});

server.listen("3000", "localhost", () => {
  console.log("Server is listening on port 3000");
});

//localhost is the default value for the host parameter : 127.0.0.1
//port 3000 is the default value for the port parameter
