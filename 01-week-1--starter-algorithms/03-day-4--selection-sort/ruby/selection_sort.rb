def selection_sort(arr)
  sorted_array = []
  until arr.length == 0
    num = arr.min
    sorted_array.push(num)
    indexedNum = arr.index(num)
    arr.delete_at(indexedNum)
  end
  return sorted_array
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: [-1, 2, 3, 5]"
  print "=> "
  print selection_sort([3, -1, 5, 2])

  puts

  # Don't forget to add your own!

  # BENCHMARK HERE, you can print the average runtime
  long_input = []

  100.times { long_input << rand }
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# sort an input array from min to max
# create an empty variable to store new array
# iterate through array as long as its not empty
# destructively remove the smallest element that we iterated on
# return the new sorted array

#what did WE DO?????
#we needed an empty variable to store our new sorted array
#we had to iterate through the array until length hit 0- bc we progressively removed things from array
# we removed things by finding the index the min number was at.
#if we didnt remove things from the array, we would never break out the loop
#everytime we found the min, we pushed it into the new array, and removed it from input array