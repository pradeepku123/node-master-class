import { sum, diff } from "./lib.js";
import fs from "fs";
console.log(`Welcome to Node MasterClassd `);

console.log(sum(1, 2), diff(1, 2));

fs.readFile("eg.txt", "utf-8", (err, txt) => {
  console.log(txt);
});
