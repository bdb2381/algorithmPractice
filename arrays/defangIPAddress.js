**
 * @param {string} address
 * @return {string}
 * via leetCode
 */

 // O(n) runtime
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