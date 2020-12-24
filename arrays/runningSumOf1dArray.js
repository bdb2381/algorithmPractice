// Constraints:

// 1 <= nums.length <= 1000
// -10^6 <= nums[i] <= 10^6
// nums = [1,2,3,4]


//O(n)time and O(n) memory since creating a new array matching in size of input
var runningSum = function(nums) {
  let number  = 0
  let runningArray = []

    for (i = 0; i < nums.length; i++){
        number = number + nums[i]
        runningArray.push(number)
    }

    return runningArray
    
};