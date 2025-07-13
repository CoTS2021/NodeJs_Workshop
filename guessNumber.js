import readline from 'readline'

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const target = Math.floor(Math.random() * 100);

let attempts = 0;

function askGuess() {
  rl.question("Guess a Number between 1 and 100:", (input) => {
    const guess = parseInt(input);
    attempts++;

    if (isNaN(guess)) {
      console.log("Please enter a valid number");
      askGuess();
    } else if (guess > target) {
      console.log("Oops! Too high,Try again");
      askGuess();
    } else if (guess < target) {
      console.log("To Low,again try");
      askGuess();
    } else {
      console.log("Correct,your guess is right");
      console.log(`you correct at ${attempts} turns`)
      rl.close();
    }
  });

}

  console.log("Welcome to Cots,Let's play Game");
  askGuess();
