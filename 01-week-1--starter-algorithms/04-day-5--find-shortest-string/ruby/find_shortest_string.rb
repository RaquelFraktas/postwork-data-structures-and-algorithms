def find_shortest_string(arr)
  shorter = arr[0]
  arr.each do |string|
    if string.length < shorter.length
      shorter = string
    end
  end
  shorter
end

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 'a'"
  puts "=>", find_shortest_string(['aaa', 'a', 'bb', 'ccc'])

  puts

  puts "Expecting: 'hi'"
  puts "=>", find_shortest_string(['cat', 'hi', 'dog', 'an'])

  puts

  puts "Expecting: 'lily'"
  puts "=>", find_shortest_string(['flower', 'juniper', 'lily', 'dadelion'])

  # Don't forget to add your own!

  # BENCHMARK HERE
end

# Please add your pseudocode to this file
# And a written explanation of your solution

# // Given an Array of strings, return the shortest string. If there is more than one string of that length, return the string that comes first in the list. The Array will have a minimum length of 1.

#set a variable equal to the first element in the array
# loop through the array
# check to see if that an element in that iteration is shorter than the iterated variable
# if yes, rest the declaration of that variable
# then return that variable declaration

# this works bc we are setting the first element to a variable
# when we iterate, we check to see if theres anything shorter than the set variable
# we return that variable after iteration, if there is no other matches, then the original set variable is spat out