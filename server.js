//import http from "http";
import app from "./src/app.js"

const PORT = 3000;

//const server = http.createServer((req, res) => {
// res.writeHead(200, { "Content-Type": "text/plain" });
//res.end(rotas[req.url]);
//});

app.listen(PORT, () => {
  console.log("servidor escutando!");
});


//import http from "http";

//const PORT = 3000;

//const server = http.createServer((req, res) => {
//  res.writeHead(200, { "Content-Type": "application/json" });
//  res.end();
//});

//server.listen(PORT, () => {
//  console.log("servidor escutando!");
//});
