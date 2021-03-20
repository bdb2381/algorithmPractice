
// Attempt 1
// Time: O(n + m) since we loop through each total input strings 1 times
// Space: O(c) additional space for only unique chars in characters
function generateDocument(characters, document) {
	let charMap = {}
	let count = 1

	for(let char of characters){
		// check if char exists, if not add it, if it does increase count
		!charMap[char] ? charMap[char] = count : charMap[char]++ 
	}
	
	
	// compare each char in document to the charMap
	// if characters match, decrease available count
	// if no character matches and count isn't zero, we don't have matching strings
	for(let char of document){
		if(charMap[char] && charMap[char] != 0) {
			charMap[char]--
		}
		else{ return false}
	}
	
	
	return true
	
	
}

// Do not edit the line below.
exports.generateDocument = generateDocument;
