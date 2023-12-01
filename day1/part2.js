const fs = require("fs");
const coordinateArray = fs.readFileSync("input1.txt").toString().split("\n");

const wordToNumDict = {
  one: "1",
  two: "2",
  three: "3",
  four: "4",
  five: "5",
  six: "6",
  seven: "7",
  eight: "8",
  nine: "9",
};

const regexMatcher =
  /one|two|three|four|five|six|seven|eight|nine|1|2|3|4|5|6|7|8|9/gi;

let totalSum = 0;

for (let i in coordinateArray) {
  //eightwo -> should be 8 2 but regex consumes eight and left with wo
  //known as a look ahead regex
  const string = coordinateArray[i];
  var matches = [],
    found;
  while ((found = regexMatcher.exec(string))) {
    matches.push(found[0]);
    regexMatcher.lastIndex = found.index + 1;
  }

  const convertedMatches = matches.map((e) => {
    if (isNaN(+e)) {
      return wordToNumDict[e];
    }

    return e;
  });

  totalSum += +(convertedMatches.at(0) + convertedMatches.at(-1));
}
console.log(totalSum);
