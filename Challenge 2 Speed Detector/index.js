const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function checkSpeed() {
    rl.question('Please enter the speed of the car: ', (speed) => {
        speed = Number(speed);
        if (isNaN(speed)) {
            console.log("Invalid input. Please enter a valid number.");
            rl.close();
            return;
        }

        const speedLimit = 70;
        const demeritPointThreshold = 12;
        const kmPerDemeritPoint = 5;

        if (speed <= speedLimit) {
            console.log("Ok");
        } else {
            const points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
            if (points > demeritPointThreshold) {
                console.log("License suspended");
            } else {
                console.log(`Points: ${points}`);
            }
        }
        rl.close();
    });
}

checkSpeed();