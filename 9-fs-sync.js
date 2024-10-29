let fs = require("fs");

let first = fs.readFileSync("./content/first.txt", "utf8");

console.log(first);

fs.writeFileSync(
  "./content/second.txt",
  `Here's a created text file, different from '${first}'`,
  { flag: "a" },
  { flag: "a" }
);
