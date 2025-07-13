// Scopes
function printName(name, gender) {
  let age = 22;
  if (gender == "male") {
    let optionalText = "boy"
    console.log(
      `My name is ${name} and i am ${age} years old and i am a ${optionalText}`
    );
  } else {
    let optionalText = "girl";
    console.log(
      `My name is ${name} and i am ${age} years old and i am a ${optionalText}`
    );
  }
  console.log(age); // This is in the scope
}

// This is outside the scope
console.log(age); // Gives error like: age is not defined

printName("Govind", "male");

// Closure

function incrementHelper() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}

let increment = incrementHelper();

// Still recalls the instance of count even after the execution
increment(); // 1
increment(); // 2

// Callback
function greet(name, callback) {
  console.log("Hello " + name);
  callback(); // this function is call later but passed as agrument
}

function callback() {
  console.log("Welcome to session 3!");
}
greet("Sita", callback);

// greet("Govind", () => {
//   console.log("Welcome to session 3!");
// });

// Callback hell
setTimeout(() => {
  console.log("1"); // appears after 1 sec
  setTimeout(() => {
    console.log("2"); // appears after next 1 sec
    setTimeout(() => {
      console.log(3);
    }, 1000);
  }, 1000);
}, 1000);

// Promises
const myPromise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation succeeded");
  } else {
    reject("Operation failed");
  }
});

myPromise
  .then((result) => console.log(result))
  .catch((err) => console.error(err));

// async/await
console.log("first");
setTimeout(() => {
  console.log("second");
}, 3000);
console.log("three");

setInterval(() => {
  console.log("four");
}, 2000);

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  console.log("Start");
  await delay(1000);
  console.log("After 1 second");
}
run();

// SetTimeout() and SetInterval()

setTimeout(() => {
  console.log("Executed after 2 seconds");
}, 3000);

let count = 0;
const intervalId = setInterval(() => {
  count++;
  console.log("Repeating: ", count);
  if (count === 3) clearInterval(intervalId);
}, 1000);
console.log(intervalId);

// Error handling

try {
  let result = 10 / 0;
  console.log("Result:", result);
  throw new Error("Something went wrong");
} catch (error) {
  console.error("Caught Error:", error.message);
}

async function fetchData() {
  try {
    let data = await Promise.reject("Network error");
  } catch (err) {
    console.error("Caught async error:", err);
  }
}
fetchData();

// Callback based
function loadData(callback) {
  setTimeout(() => {
    callback(null, "Data loaded");
  }, 1000);
}

loadData((err, data) => {
  if (err) console.error(err);
  else console.log(data);
});

// Promise based
function loadDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Data not loaded");
    }, 1000);
  });
}

loadDataPromise()
  .then((data) => console.log(data))
  .catch((err) => console.error(err));

// async/await
async function main() {
  try {
    const result = await loadDataPromise();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
main();
