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
//increment(); // 2
