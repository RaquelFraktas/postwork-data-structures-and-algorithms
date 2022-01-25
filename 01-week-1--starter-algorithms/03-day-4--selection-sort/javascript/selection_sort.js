function selectionSort(arr) {
  let sortedAry= []
    while (arr.length > 0){
    let num = Math.min(...arr)
    //WHY DOES IT NEED A SPREAD OPERATOR??????
    // ...arr makes a new copy you can work with 
    // initial array doesnt exist anymore. but you can create a new copy that can exist now
    let newSplice= arr.indexOf(num)
    sortedAry.push(num)
    arr.splice(newSplice,1)
    }
    return sortedAry

  // type your code here
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [-1, 2, 3, 5]");
  console.log("=>", selectionSort([3, -1, 5, 2]));

  console.log("");

  // BENCHMARK HERE, and print the average runtime
  const longInput = [];

  for (let i = 0; i < 100; ++i) {
    longInput.push(Math.random());
  }
}

module.exports = selectionSort;

// Please add your pseudocode to this file
//sorting an array with selection sort
//create a new variable that's the empty array/ output
// find out the minimum with Math.min()- this gives the input of the array at the smollest val
// take out the value that was added 



// And a written explanation of your solution
//we needed an empty variable to store all the min values we took from the input array
// we had to iterate through the input array, and grab the min value from it each time.
//we had to work with a copy of the input array instead of the original array, in our math min function bc we were
//destructively changing the array when removing values from the input array
//we removed vals from the input array so that we dont get dupes