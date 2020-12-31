// Constraints:

// 1 <= word1.length, word2.length <= 103
// 1 <= word1[i].length, word2[i].length <= 103
// 1 <= sum(word1[i].length), sum(word2[i].length) <= 103
// word1[i] and word2[i] consist of lowercase letters.
// via leetcode. com 

const word1 = ["ab", "c"]
const word2 = ["a", "bc"]

// Solution 1 Time: O(n**2)
var arrayStringsAreEqual = function(word1, word2) {

  // closure arrow function. make array of strings into pure strings  
  const makeStrings = (element) => {
      let result = "" 
      element.map(character => {
          result += character  // += is how to concat letters together 
      })
      return result
  }
  
  let one = makeStrings(word1) 
  let two = makeStrings(word2)
  

  if(one === two) return true
  if(one !== two) return false
};