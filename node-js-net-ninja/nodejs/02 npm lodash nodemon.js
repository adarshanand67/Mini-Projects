const http = require("http"); // http module for all client server interactions
const fs = require("fs"); // fs module for file system interactions
const _ = require("lodash");

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  // request made to browser, response we get from server

  // lodash
  const num = _.random(0, 20); // a random number from 0 to 20
  console.log(num);

  // run once only
  const greet = _.once(function () {
    console.log("Greetings!");
  });
  greet();
  greet();

  // handling response
  res.setHeader("Content-Type", "text/html");

  let path = "./nodejs/html/";
  url_response = req.url;

  // routing - send diff html file on each request
  if (url_response == "/") {
    path += "index.html;";
    res.statusCode = 200;
  } else if (url_response == "/about") {
    path += "about.html";
    res.statusCode = 200;
  } else if (url_response == "/contact") {
    path += "contact.html";
    res.statusCode = 200;
  } else if (url_response == "/about-us") {
    // basic redirect (redirect to another link in website)
    res.statusCode = 301;
    res.setHeader("Location", "/about");
    // res.end();
  } else {
    path += "404.html";
    res.statusCode = 404;
  }

  console.log(path);

  // res.end();

  // populate with HTML
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    }
    //res.write(data);
    res.end(data);
  });
});

const port = 3000;
const hostname = "localhost";

server.listen(port, hostname, () => {
  // console.log(`Listening on ${port} and hostname ${hostname}`);
});

/*
  Status codes 
  200 - ok
  404 - error
  301 - page moved
  500 - internal server error
*/
