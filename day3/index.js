const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
input.pop();

let total = 0;

input.map((e, i) => {
  const symbolMatcher = /[^0-9a-zA-Z.]/g;
  const numberMatcher = /\d+/g;
  while ((matched = symbolMatcher.exec(e)) != null) {
    while ((numMatchPrev = numberMatcher.exec(input[i - 1])) != null) {
      if (
        numberMatcher.lastIndex - 1 === matched.index - 1 ||
        numberMatcher.lastIndex - 1 === matched.index ||
        numberMatcher.lastIndex - 1 === matched.index + 1 ||
        numMatchPrev.index === matched.index + 1 ||
        numMatchPrev.index === matched.index
      ) {
        total += +numMatchPrev;
      }
    }
    while ((numMatchCurrent = numberMatcher.exec(input[i])) != null) {
      if (
        numberMatcher.lastIndex - 1 === matched.index - 1 ||
        numberMatcher.lastIndex - 1 === matched.index ||
        numberMatcher.lastIndex - 1 === matched.index + 1 ||
        numMatchCurrent.index === matched.index + 1 ||
        numMatchCurrent.index === matched.index
      ) {
        total += +numMatchCurrent;
      }
    }
    while ((numMatchNext = numberMatcher.exec(input[i + 1])) != null) {
      if (
        numberMatcher.lastIndex - 1 === matched.index - 1 ||
        numberMatcher.lastIndex - 1 === matched.index ||
        numberMatcher.lastIndex - 1 === matched.index + 1 ||
        numMatchNext.index === matched.index ||
        numMatchNext.index === matched.index + 1
      ) {
        total += +numMatchNext;
      }
    }
  }
});

console.log(total);
