function fibonacci(num) {
  if (num < 2){
    return num
    // the edge case if the value is less than 2
    // prevents us from running unecessary code/iterations
  } else {
    let inputAry= [0,1]
    // starts out the fibonacci sequence, it is known
    for(let i=1; i < num; i++){
      let fibForm = inputAry[i] + inputAry[i-1]
      // formula to get the numbers from the fibonacci sequence. we add the 2 preceeding numbers in the array
      inputAry.push(fibForm)
      // we add the new fib number onto the array for storage
    } 
    return inputAry[num]
  }
}

//   /(\
//   ¡ !´\
//   | )\ `.
//   | `.)  \,-,--
//   (      / /
//    `'-.,;_/
//           `----

// function fibonacci(num) {
//   if (num < 2){
//     return num
//   } else {
//       let inputAry= [0,1]
//       for(let i= 0; i < num-1 ; i++){
//         let theSum = inputAry[0] + inputAry[1]
//         inputAry= [inputAry[1], theSum]
//       }
//       return inputAry[1]
//   }
// }

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
// return an output in the fibonacci sequence based off the indexed number (input)
// the third number in a fib seq, is the sum of the 2 preceeding numbers
// create an array to hold the values from input
// create a formula that adds new values into the fib sequence and adds it to the array variable
// iterate that formula by the times from the input
// grab the number at the given index from the created array