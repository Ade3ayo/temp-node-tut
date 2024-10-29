let http = require("http");

let server = http.createServer((req, res) => {
  if (req.url == "/") res.end("Welcome to our home page");

  if (req.url == "/about") res.end("Our short history");

  res.end(
    `<h1> Ops!</h1>
    <p> You have miss road </p>
    <a href="/">Back Home</a>`
  );
});

server.listen(5050);
