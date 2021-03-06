// Time: O(log(n)) since removing half the branches on average
// Space: O(n) since recursive needs space for each half we store, which is the number of inputs on a branch
// via AlgoExpert

// Solution 1
function findClosestValueInBst(tree, target) {
	// helper function to call recursive
	return findClosestValue(tree, target, Infinity)
}

function findClosestValue(tree, target, closest){
	if (tree === null) { 
		// base case: once reach a leaf and no more exists
		return closest 
	}
	if (Math.abs(target - closest) > Math.abs(target - tree.value)){
		// if difference between target/closest is further away (greater) 
		// then target/tree.value is to target
		// then the tree.value is the current known closest and is set as such
		closest = tree.value
	}
	if (target < tree.value){
		// smaller values are always left side.
		// if target is less, then we need to search left side only
		return findClosestValue(tree.left, target, closest)
	}
	else if (target > tree.value){
		// larget values are always right
		// if target is bigger, search the right side
		return findClosestValue(tree.right, target, closest)
	}
	else{
		// when target and value are equal 
		return closest
	}
}


// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;





// Solution 2 
// need more practice with trees
function findClosestValueInBst(tree, target) {
	return checkValue(tree, target, tree.value)
}

function checkValue(tree, target, close){
 if(tree === null) {  // handle null case first, which means leaf and not more nodes to check
	 return close
 }
 
 let currentValue = tree.value // make human readable reference

 // check if currentValue or a prior close value is closer to the target
 // update close if currentValue is closer
 if( Math.abs(currentValue - target) < Math.abs(close - target)){
		 close = currentValue
	 } 
			 
 // decide which branch to go down
	if (target > currentValue) {
		 return checkValue(tree.right, target, close)
	 }
	 else if(target < currentValue){
		 return checkValue(tree.left, target, close)
	 }
 
 // or just return when currentValue and close are ===
	 return(close)
 
}

// This is the class of the input tree. Do not edit.
class BST {
 constructor(value) {
	 this.value = value;
	 this.left = null;
	 this.right = null;
 }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
