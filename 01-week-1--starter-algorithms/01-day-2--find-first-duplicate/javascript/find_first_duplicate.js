function findFirstDuplicate(arr) {
  for( i= 0; i < arr.length; i++){
    if(arr[i]===arr[i+1]){
      return arr[i]
    } 
  }
  return -1
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 3");
  console.log("=>", findFirstDuplicate([2, 1, 3, 3, 2]));

  console.log("");

  console.log("Expecting: -1");
  console.log("=>", findFirstDuplicate([1, 2, 3, 4]));
}

module.exports = findFirstDuplicate;

// Please add your pseudocode to this file
// iterate over Array
//   if iterated num matches anything in array, return that num
//   find that num at it's iteration at find function
//    else nothing matches, return -1
// And a written explanation of your solution
//  We iterated because its a logical way to check each value in the array.
// We used i+1 to compare one place to the right of i equally.
// if there was a comparision, then we would return the value of i and break the iteration (thru returning it)
//  if nothing was passed through the conditional thru all the loops, we returned -1