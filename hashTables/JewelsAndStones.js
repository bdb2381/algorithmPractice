/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 * Note:

S and J will consist of letters and have length at most 50.
The characters in J are distinct.
via leetcode 
 */

var numJewelsInStones = function(J, S) {
    
  let dictionary = {}
  let counter = 0
  
  for(let i = 0; i < J.length; i++){
      dictionary[J[i]] = true
  }
  
  for(let i = 0; i < S.length; i++){
      if(S[i] in dictionary) counter++
  }
  
  return counter

};