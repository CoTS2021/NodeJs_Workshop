const fs = require("fs");

fs.readFile("testFile.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("This is the data inside the file:" + data);
});
console.log("Reading of the file takes place in background");
