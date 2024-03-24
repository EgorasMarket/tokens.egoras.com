const readFIle = require("fs");

const base = readFIle.readSync(__dirname, "tokens");
console.log(base);
