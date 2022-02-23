def recursive_count(num = 0)
  return if num >= 10
  puts num
  recursive_count(num + 1)
end

if __FILE__ == $PROGRAM_NAME
  recursive_count
end

# OPTIONAL
# Please add your pseudocode to this file
# And a written explanation of your solution

# add a base case for the number being equal or less than 9 to return
# log out the number
# recurisvely call the added number

