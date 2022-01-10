function findFirstDuplicate(arr) {
  let uniques = new Set()
  for (const element of arr) {
    if (uniques.has(element)) {
      return element;
    }

    uniques.add(element);
  }

  return -1;
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
