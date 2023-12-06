const fs = require("fs");
const input = fs.readFileSync("input.txt").toString().split("\n");
input.pop();

let total = 0;

input.map((e, i) => {
  const symbolMatcher = /[\*]/g;
  const numberMatcher = /\d+/g;
  while ((matched = symbolMatcher.exec(e)) != null) {
    const data = [];
    while ((numMatchPrev = numberMatcher.exec(input[i - 1])) != null) {
      if (
        numberMatcher.lastIndex - 1 === matched.index - 1 ||
        numberMatcher.lastIndex - 1 === matched.index ||
        numberMatcher.lastIndex - 1 === matched.index + 1 ||
        numMatchPrev.index === matched.index + 1 ||
        numMatchPrev.index === matched.index
      ) {
        data.push(+numMatchPrev);
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
        data.push(+numMatchCurrent);
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
        data.push(+numMatchNext);
      }
    }

    if (data.length === 2) {
      total += data[0] * data[1];
    }
  }
});

console.log(total);
