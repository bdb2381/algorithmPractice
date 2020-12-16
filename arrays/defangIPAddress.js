**
 * @param {string} address
 * @return {string}
 * via leetCode
 */

let address = "1.1.1.1"
//result should == "1[.]1[.]1[.]1"


 // O(n) runtime  Solution 1 
var defangIPaddr = function(address) {
    
   // let updatedAddress = address.split(".").join("[.]")

    let result = ""
    
    for (let i = 0; i < address.length; i++){
       if (address[i] == "."){
           result += "[.]"
       }
    
        else {
           result += address[i]         
        } 
           
    }
    return result  
};

// O(n) Solution 2
var defangIPaddr = function(address) {
  let result = ""
  
  for (character in address){
      if(address[character] == "."){
          result += "[.]"
      }
      else{
          result += address[character]
      }
  }
  
  return result
  
};