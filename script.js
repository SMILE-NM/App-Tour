function popShift(arr) {
    let popped = arr.shift(); // Change this line
    let shifted = arr.pop(); // Change this line
    console.log(arr)
    return [shifted, popped];
  }
  console.log(popShift(['challenge', 'is', 'not', 'complete', 'Hello world']));