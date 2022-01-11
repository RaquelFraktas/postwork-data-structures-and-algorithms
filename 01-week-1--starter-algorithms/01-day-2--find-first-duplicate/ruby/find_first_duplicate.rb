def find_first_duplicate(arr)
  if arr.length == 0
    return -1
  end
  hash = Hash.new(0)
  arr.each do |element|
    hash[element] += 1
    return element if hash[element] > 1

  end
  return -1  
end




if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 3"
  puts "=>", find_first_duplicate([2, 1, 3, 3, 2])

  puts

  puts "Expecting: -1"
  puts "=>", find_first_duplicate([1, 2, 3, 4])

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# check to see if array length is 0, if yes, return -1
# create an empty hash
# iterate thru array
#  create a key that equals the corresponding value in the array
#  add 1 to the value for each key
#  check if the value is greater than 1 in the hash, then return the value
# return -1 if nothing matches

# And a written explanation of your solution
  # first, before we do any work, we want to check if the array is empty to avoid unnecessary work
  # then, we want to instantiate an empty hash where we can store keys and values after iterating through our array. 
  # by storing keys and values, we are saving o(n) time. 
  # after we store k/v pairs, we're adding one to each iteration of that key/value pair as the value
  # once we get to the value of 2, that breaks out of the loop
# 