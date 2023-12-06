const fs = require("fs");
const input = fs.readFileSync("input").toString().split("\n");

let total = 0;

// const maximum = {
//   red: 12,
//   green: 13,
//   blue: 14,
// };

const mappedInput = input.map((game) => {
  const maximum = {
    red: 0,
    green: 0,
    blue: 0,
  };
  const gameInfo = game.split(/:|;/);
  const gameId = +gameInfo[0].split(" ")[1];

  for (let index = 1; index < gameInfo.length; index++) {
    const splitGameInfo = gameInfo[index].match(/\d+|red|green|blue/g);
    for (let index = 0; index < splitGameInfo.length; index += 2) {
      const diceNumber = splitGameInfo[index];
      const diceColour = splitGameInfo[index + 1];
      if (diceNumber > maximum[diceColour]) {
        maximum[diceColour] = +diceNumber;
      }
    }
  }
  total += maximum.red * maximum.green * maximum.blue;
});
console.log(total);
