/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
   
  const arrayOfDigits = Array.from(String(x), Number)
  
  if( x < 0 ) {
         return false}


 i = 0;
 l = arrayOfDigits.length-1
 
     while ( i < arrayOfDigits.length-1){
         if (!(arrayOfDigits[i++] === arrayOfDigits[l--])){
             return false
         }
         
     }
       
 return true 
 
}


// version 2
var isPalindrome = function(x) {
  if( x < 0 ) {
       return false
  }
  
  let reversed = []
  let input = x 
  
  while(x){
      lastNumber = x % 10
      x = (x - lastNumber) / 10
     reversed.push(lastNumber)
  }
  
  let final = reversed.join("")    
  
  return final > Math.pow(2, 31) ? 0 : input == final ?  true : false
     
};

// version 3 with best time complexity of log base 10 of N
var isPalindrome = function(x) {
  if( x < x ) {
       return false
  }
 
  let lastNumber = 0
  while(x > lastNumber){
      lastNumber = lastNumber * 10 + x % 10
      x = Math.floor(x/10)
  }
     
  return x == lastNumber || x == lastNumber/10
};

//Attempt 4 with strings in 11:03 minutes
//Time: O(n) since need to touch each index in the input
//Space: 0(1) no new space is created
function isPalindrome(string) {
	let left = 0 
	let right = string.length - 1

	while (left <= right){
		let leftLetter = string[left]
		let rightLetter = string[right]

		if( leftLetter === rightLetter  ){
				left++
				right--
		}
		else{
				return false
			}
  }
  
	return true

}

// Do not edit the line below.
exports.isPalindrome = isPalindrome;
