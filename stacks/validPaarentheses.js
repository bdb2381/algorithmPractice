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


function balancedBrackets(string) {
  // Write your code here.
	let brackets = "()[]{}"
	let stack = []
	let left = {
		"(": 1,
		"[": 2,
		"{": 3
	}
	
	let right = {
		")": 1,
		"]": 2,
		"}": 3
	}
	
	
  //Solution 2. Accounts for letters mixed in.
  //O(n) runtime
	function balancedBrackets(string) {
    // Write your code here.
    let stack = []
    let left = {
      "(": 1,
      "[": 2,
      "{": 3
    }
    
    let right = {
      ")": 1,
      "]": 2,
      "}": 3
    }
    
    for(index in string){
      if(string % 2 / 10 == 1){
        return false
      }
      else if(left[string[index]] ){
        stack.push(string[index])
      }
      else if (!right[string[index]]){
        // skip letters
      }
      else if (left[stack.pop()] !== right[string[index]]){
        return false
      }
      
    }
    return stack.length == 0
    
  }
}
  // Do not edit the line below.
  // exports.balancedBrackets = balancedBrackets
