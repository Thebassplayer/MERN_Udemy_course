const { log } = require("console");
const { firstname, lastname } = require("./data");
const os = require("os");
const path = require("path");

const greet = name => {
  console.log(`Hello ${name}`);
};

// greet("Roy");

// console.log(global);

// globalThis.setInterval(() => {
//   console.log("Hello World");
// }, 1000);

console.log(__dirname);
console.log(__filename);

console.log(firstname, lastname);

console.log("OS platform:", os.platform());

console.log(path);
