const fs = require("fs");
const { parse } = require("csv-parse");

function csvParser() {
  return new Promise((resolve, reject) => {
    const usernames = [];

    fs.createReadStream("it.csv")
      .pipe(parse({ delimiter: ",", from_line: 2 }))
      .on("data", (row) => {
        usernames.push(row[2]);
      })
      .on("end", () => {
        console.log("CSV file successfully processed.");
        resolve(usernames);
      })
      .on("error", (error) => {
        reject(error);
      });
  });
}

module.exports = csvParser;
