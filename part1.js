const fs = require('fs');
const coordinateArray = fs.readFileSync('input1.txt').toString().split("\n");

let totalSum = 0
const calibrationArray = []

for(let i in coordinateArray) {
    const coordinateSplit = coordinateArray[i].split("");
    const filteredCoords = coordinateSplit.filter(e => !isNaN(+e))
    
    calibrationArray.push(+(filteredCoords.at(0) + filteredCoords.at(-1)));
}

calibrationArray.forEach(e => totalSum += e)
console.log(totalSum);