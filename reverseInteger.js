/**
 * @param {number} x
 * @return {number}
 * Constraints:
  -231 <= x <= 231 - 1
  via leetCode 
 */

var reverse = function(x) {
  let reversed = []
  
  let negative = x < 0 ? x * -1 : false
  
  if(negative){
     x = negative
  }
  
  while(x !== 0 ){
      let lastNumber = x % 10
      x = (x - lastNumber) / 10
      reversed.push(lastNumber)
  }
 
  let output = reversed.join("")

  if(negative){
      return output > Math.pow(2, 31) ? 0 : output * -1 
  }
  
  return output > Math.pow(2, 31) ? 0 : output 
 
};