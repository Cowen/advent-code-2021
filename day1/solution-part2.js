const fs = require("fs");

// Quick definition for cleaner sums later
const sum = (array) => array.reduce((a, b) => a + b);

var filedata;
try {
  filedata = fs.readFileSync(`${__dirname}/input.txt`, "utf8");
} catch (err) {
  console.error(err);
}

var depths = filedata.toString().trim().split("\n").map(Number);

// console.log(depths);

var totalIncreases = 0;

// sliding windows of triples this time
// start from index 1 instead of 0 so we have something to compare against
// Array.slice is end-exclusive, so we have to go 1 beyond array length
for (var i = 3; i < depths.length; i++) {
  const prevTriple = depths.slice(i - 3, i);
  const currTriple = depths.slice(i - 2, i + 1);

  if (sum(prevTriple) < sum(currTriple)) {
    totalIncreases++;
  }
}

console.log("Total increases: " + totalIncreases);
