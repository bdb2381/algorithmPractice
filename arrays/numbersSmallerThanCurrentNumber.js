/**
 * @param {number[]} nums
 * @return {number[]}
 */
// Constraints:

// 2 <= nums.length <= 500
// 0 <= nums[i] <= 100

//Version 1
// time O(n^2) space O(n)
var smallerNumbersThanCurrent = function(nums) {
  let map = {}
  let output = []
  
  for(let i = 0; i < nums.length; i++){
      let counter = 0
      
      for(let j = 0 ; j < nums.length; j++){
          if (nums[i] > nums[j]){
              counter++ 
          }                
      }      
    output.push(counter)
  }
  
  return(output)
};