function recursiveCount(num = 0) {
  if (num >= 9){
    return console.log(num)
  }
  console.log(num)
  recursiveCount(num + 1)
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
//recursively call the function
// increase the counter each time the method is called
//stop recursion if it hits 9. counter starts at 0

//this works because i first had to write the conditional for the base case
// then return the function if the base case was hit
// if its not hit, then console log the number, and recursively call the number with an added 1