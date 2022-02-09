function findShortestString(arr) {

  if (arr.length === 1){
    return arr[0]
  }
  sortedArr= arr.sort((a, b)=> a.length - b.length)
  return sortedArr[0]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'a'");
  console.log("=>", findShortestString(['aaa', 'a', 'bb', 'ccc']));

  console.log("");

  console.log("Expecting: 'hi'");
  console.log("=>", findShortestString(['cat', 'hi', 'dog', 'an']));

  console.log("");

  console.log("Expecting: 'lily'");
  console.log("=>", findShortestString(['flower', 'juniper', 'lily', 'dadelion']));

  // BENCHMARK HERE
}

module.exports = findShortestString;

// Please add your pseudocode to this file
// And a written explanation of your solution

// Given an Array of strings, return the shortest string. If there is more than one string of that length, return the string that comes first in the list. The Array will have a minimum length of 1.

//return shortest string from array + first shortest string from list

// return the element if theres only one element
//sort function
//loop through the array
//find the element with the lowest value 
//