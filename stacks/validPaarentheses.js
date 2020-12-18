/**
 * @param {string} s
 * @return {boolean}
 * via leetcode
 */
// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

// O(n) Solution 1
var isValid = function(s) {
  let stackArray = []
  let counter = 0
  
  if(s.length % 2 !== 0){
      return false
  }
  let left = {
      '{': 1,
      '[': 2,
      '(': 3
  }
  let right = {
      '}': 1,
      ']': 2,
      ')': 3
  }
  
  for (let i = 0; i < s.length; i += 1){
      if(left[s[i]]){
          stackArray.push(s[i])
      }else if(left[stackArray.pop()] !== right[s[i]]){
          return false
      }
  }
  console.log(stackArray.length)
  return stackArray.length? false : true
};