// const arr = [1, 2, 3, 4, 5];
// console.log(typeof arr);

// console.log(Math.floor(Math.random() * 10000));

// const person = {
//   name: "Saugat Giri",
//   rollNumber: 1070,
//   email: "saugatgiri1070@gmail.com",
//   introduction: function () {
//     console.log(`of course,it's me ${this.name}`);
//   },
// };

// person.introduction();

// let fruits = ["mango", "orange", "apple", "grapes"];
// let numbers = [1, 2, 3, 4, 5, 6];

// let sqrs = numbers.map((val) => val * val);
// console.log(sqrs);

// let filtered = numbers.reduce((curr, val) => curr * val, 1);
// console.log(filtered);

// let even = numbers.filter((val) => {
//   return val % 2 == 0;
// });
// console.log(even);

// console.log(fruits);

// let fruits = ["orange", "mango", "grapes", "apple"];
// console.log(fruits.length);

// // fruits.push("banana");
// // console.log(fruits);

// let poped = fruits.pop();
// console.log(poped);

// const numbers = [1, 2, 3];
// const squared = numbers.map((num) => {
//   console.log(num);
//   return num + num;
// });
// console.log(squared);

let numbers = [1, 2, 3, 4, 5, 6];
// let even = numbers.filter((val) => val % 2 == 0);
// console.log(even);

let sum = numbers.reduce((curr, acc) => {
  return curr * acc;
}, 1);
console.log(sum);
