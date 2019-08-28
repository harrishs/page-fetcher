const request = require("request");
const fs = require("fs");
const args = process.argv.slice(2);
const url = args[0];
const path = args[1];

request(url, (error, response, body) => {
  console.log("error:", error);
  console.log("statusCode:", response && response.statusCode);
  fs.writeFile(path, body, error => {
    if (error) {
      process.exit();
    } else {
      console.log(`Downloaded and saved ${body.length} bytes`);
    }
  });
});
