def fibonacci(num)
  if num < 2
    return num
    #edge case to avoid expensive iteration if we are given num < 2
  else
    input_ary= [0,1]
    # create a starting point for fib seq
    (num-1).times do
      # it iterates one number fewer, instead of going 1 num over if you did
      ## num.times do, since we already created the first sum, we need to iterate one less
      sum = input_ary[0]+ input_ary[1]
      # creating a new based on the 2 preceeding nums in the array to add to our input_ary variable
      input_ary = [input_ary[1], sum]
      # destructively updates/re-defines the input_array
      
    end
    return input_ary.last
    # returns the second value in our input array-- since our input_array only 
    # has two vals- preceeding num and sum. our input array only stores two values to avoid a bunch of numbers we dont need
  end

  # type your code in here
end


# /(\
# ||\\
# ! ‾ `;-
#  `--/__
# get rid of the edge case- where the input is less than 2. return the first vals in fib seq.
# create a temp ary to store values
#initialize the temp ary with firsttwo vals in fib sequence
#iterate through the ary num times
# return the num at the index

if __FILE__ == $PROGRAM_NAME
  puts "Expecting: 0"
  puts "=>", fibonacci(0)

  puts

  puts "Expecting: 1"
  puts "=>", fibonacci(2)

  puts

  puts "Expecting: 55"
  puts "=>", fibonacci(10)

  # Don't forget to add your own!
end

# Please add your pseudocode to this file
# And a written explanation of your solution
