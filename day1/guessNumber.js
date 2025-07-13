const readline = require("readline-sync");
// import readline from "readline-sync";

const target = Math.floor(Math.random() * 100);
let attempt = 0;

function guessNumber() {
  let guess = readline.question("guess Number:");
  attempt++;
  if (guess > target) {
    console.log("oops!,Number is too high");
    guessNumber();
  } else if (guess < target) {
    console.log(" smaller number");
    guessNumber();
  } else {
    console.log("yes, your guess is right");
    console.log(`Number of Attempt:${attempt}`);
    return;
  }
}

console.log("Let's Play Game:-");
guessNumber();

// https://github.com/cots2021 --> cots
// https://github.com/saugat1070 --> saugat1070
// https://github.com/Robertgovind --> govind
