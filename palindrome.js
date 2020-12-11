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