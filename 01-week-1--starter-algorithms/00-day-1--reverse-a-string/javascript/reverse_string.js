function reverseString(str) {
  let newArry= [];
  for(let i=0; i<= str.length; i++){
    newArry.unshift(str[i]);
  }
  let newStr= newArry.join("");
  return newStr
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));

  console.log("");

  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
// create empty array var to keep the new array
// iterate the string length
// unshift the i onto new array 
// shift removes dont forget
// revert array back to string

// And a written explanation of your solution
