/**
 * @param {number[]} nums
 * @return {number}
 * Constraints:
  1 <= nums.length <= 100
  1 <= nums[i] <= 100
  via leetcode 
 */
var numIdenticalPairs = function(nums) {
   
  let  dictionary = {}
  let pairs = 0
 
   nums.forEach( (value) => { 
     dictionary[value] = (dictionary[value] || 0) +1;        
   });
   
  for (count in dictionary){
       pairs += dictionary[count] * (dictionary[count] - 1)/2
  }      
           
       
  return pairs
  
};
