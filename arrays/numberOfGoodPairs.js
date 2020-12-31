// Given an array of integers nums.
// A pair (i,j) is called good if nums[i] == nums[j] and i < j.
// Return the number of good pairs.
// via leetcode
// Constraints:
// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

var numIdenticalPairs = function(nums) {

  let  dictionary = {}
  let pairs = 0

  nums.forEach( (value) => { 
    // create key for each value into the dictionary. 
    // if prior entry, increase value on key by 1 
    dictionary[value] = (dictionary[value] || 0) + 1;        
  });
 
  for (count in dictionary){
    //  create count of each pair. if no pair, count becomes 0 
    pairs += (dictionary[count] * (dictionary[count] - 1)) / 2
  }      
  
  return pairs
  
};
