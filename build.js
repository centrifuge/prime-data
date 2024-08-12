const fs = require("fs");

const args = process.argv.slice(2);
const IS_DEV = args[0];
const primeUsers = require(`./metadata/data${IS_DEV ? "-dev" : ""}.json`);

fs.writeFile(
  __dirname + "/out/prime.json",
  JSON.stringify(primeUsers),
  (err) => {
    if (err) {
      throw err;
    }
  }
);
