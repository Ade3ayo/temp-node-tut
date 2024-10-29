const { log } = require("console");
let fs = require("fs");

fs.readFile("./content/first.txt", "utf8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  let first = result;
  console.log(first);

  fs.readFile("./content/second.txt", "utf8", (err, result) => {
    if (err) {
      console.log(err);
      return;
    }
    let second = result;
    console.log(second);

    fs.writeFile(
      "./content/third.txt",
      `async result like ${second} unlike ${first}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log(result);
      }
    );
  });
});
