// from algoExpert
// Runtime: O(n) since it must go through each node
// Space: O(n) since at any one time, it only has n elements in memory

// This is the class of the input root.
// Do not edit it.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function branchSums(root) {
	let sums = []
	
	// initial call with starting values
	// 0 is initial running sum
  sum(root, 0, sums)
	
	return sums
}


function sum(node, runningSum, sums){
	if(!node) {
		return  // handle edge case where a node has only 1 child  
	}
	
	// keep adding each value to previous value
	let newRunningSum = runningSum + node.value
	
	// once leaf is reached, the running value is complete, push into array and end branch
	if (!node.left && !node.right){
		sums.push(newRunningSum)	
		return
	}
	
	// recursive call on each node
	sum(node.left, newRunningSum, sums)
	sum(node.right, newRunningSum, sums)
}


// Do not edit the lines below.
exports.BinaryTree = BinaryTree;
exports.branchSums = branchSums;
