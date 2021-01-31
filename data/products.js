const fs = require("fs")

module.exports = JSON.parse(fs.readFileSync(`${__dirname}/clases.json`, "utf-8"));

