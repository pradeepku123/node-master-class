/**
 * Index.js entry point from node Project
 */
import http from "http";
import fs from "fs";

const data = fs.readFileSync("index.html", "utf-8");

const server = http.createServer((req, res) => {
  console.log(`${req.url} ${req.method}`);
  res.writeHead(200, { "content-type": "text/html" });
  res.end(data);
});

server.listen(3000, () => {
  console.log(`Server listening on 3000`);
});
