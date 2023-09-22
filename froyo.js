const userInput = prompt ('enter a list of comma-separated froyo flavors');

const flavors = userInput.split(',');

const flavorCount = {};

for (const flavor of flavors) {
    if (flavorCount[flavor]) {
        flavorCount[flavor]++;
    } else {
        flavorCount[flavor] = 1;
    }
}

console.table(flavorCount);