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