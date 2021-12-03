const fs = require("fs");

var filedata;
try {
  filedata = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
} catch (err) {
  console.error(err);
}

var depths = filedata.toString().trim().split("\n").map(Number);

console.log(depths);

var totalIncreases = 0;

// start from index 1 instead of 0 so we have something to compare against
for (var i = 1; i < depths.length; i++) {
  var prev = depths[i - 1];
  var curr = depths[i];

  if (prev < curr) {
    totalIncreases++;
  }
}

console.log("Total increases: " + totalIncreases);
