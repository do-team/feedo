var summary = require("./summary.json");
var newsummary = require("./newsummary.json");

console.log("Location of summary: " + summary.items[0].location);
console.log("Complete summary: " + JSON.stringify(summary.items[0]));
summary.items[0] = newsummary;
console.log("Updated summary: " + JSON.stringify(summary.items[0]));
