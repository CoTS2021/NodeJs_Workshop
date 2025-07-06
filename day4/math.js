console.log("Entering the new module");
const sum = (a, b) => {
  return a + b;
};
const product = (a, b) => {
  return a * b;
};
const difference = (a, b) => {
  return a - b;
};
const divide = (a, b) => {
  return a / b;
};
console.log("before exporting");
// export { sum, product, difference, divide };
export default sum;
console.log("after exporting");
