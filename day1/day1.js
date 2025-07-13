//variable 

let something = "saugat";
var something_2 = 10;
const somethingSomething = "k cha"
//operator
const numberOne = 15;
const numberTwo = "15";
// console.log(numberOne == numberTwo);
// console.log(typeof numberOne,typeof numberTwo)
// console.log(numberOne === numberTwo)

const textArea = numberOne == numberTwo ? "something is turn on true" : "may be it called on false";
console.log(textArea)

// JavaScript Type Operators
//  --> typeof
const operatorName = [typeof String,typeof Number,typeof Math, typeof new Date()];
console.log(operatorName)

// --> instanceof
// Example: Check if a date object is an instance of Date
const dateObj = new Date();
console.log(dateObj instanceof Date); // true

//bitwise operator

console.log(5&1);
console.log(5 | 1);
console.log(~5);
console.log(5^1);

// arithmetic operator

 let value = 2 ** 3;
 let valueFrom = Math.pow(2,3);
 console.log(value,valueFrom);
// traditional way to define arrow function
 (function (){
    console.log("anno function")
 })
// modern way to define arrow function that return itself(doesn't require to use return keyword)
const summation = (num1,num2)=> num1 + num2;
//we need to return explicitily if we enclose function with {}
const summationTwo = (num1,num2) => {
   return num1 + num2;
}
// console.log(summation(10,10));

const person = {
   name:"saugat",
   address : "Morang",
   phoneNumbre : 9804
};
console.log(person)
let text = "";
for(let x in person){
   text +=  person[x]+" " ;
}
// console.log(text)
const myString = JSON.stringify(person)
// console.log(myString);
console.log(typeof person, typeof myString)

Object.freeze(person);
person.name = "prashant";
console.log(person.name)