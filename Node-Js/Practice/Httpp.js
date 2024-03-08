const http = require("http");
const fs = require("fs");
// const data = fs.readFileSync("./Http.json", "utf-8");
const data = require("./Http.json");
const port = 7777;
// console.log(data);

//  SWITCH CASE:-

const server = http.createServer();
server.on("request", (req, res) => {
  console.log(req.url);
//   res.end(data);
  switch (req.url) {
    case "/":
      res.setHeader("Content-type", "text/html");
      res.write('<h3 style="color:blue">Welcome to NODE-JS</h3>');
      res.end();
      break;

    case "/product":
      res.setHeader("Content-type", "application/json");
      res.end(data);
      break;

    case "/user":
      res.setHeader("Content-type", "text/html");
      res.write('<h3 style="color:green">Welcome to User Page</h3>');
      res.end();
      break;

    default:
      res.setHeader("Content-type", "text/html");
      res.write('<h3 style="color:green">Page Not Found</h3>');
      res.end();
      break;
  }
}); // Server Create

//  IF-ELSE CONDITION:-

server.on("request", (req, res) => {
  console.log(req.url);
  let items = req.url.split("/");
  console.log(items);

  if (items[1] === "") {
    res.setHeader("Content-type", "text/html");
    res.write('<h3 style="color:blue">Welcome To NODE-JS</h3>');
    res.end();
  } else if (items[1] === "user") {
    res.setHeader("Content-type", "text/html");
    res.write('<h3 style="color:blue">Welcome To User Page</h3>');
    res.end();
  } else if (items[1] === "product") {
    res.setHeader("Content-type", "application/json");
    if (items.length === 3) {
      let id = Number(items[2]);
      let products = data[id - 1];
      res.end(JSON.stringify(products));
    } else res.end(JSON.stringify(data));
  } else {
    res.setHeader("Content-type", "text/html");
    res.write('<h3 style = "color:red">Page Not Found</h3>');
    res.end();
  }
});

server.listen(port, () => {
  console.log("Server Start at Port 7777");
});
