
// from AlgoExpert


// Attempt 1
// Time: O(n**) since using a reducer
// Space: O(h) since tree height is what is on call stack at any one time, worst case
function nodeDepths(root) {
	let runningDepth = -1 
	let arrayToSum = []
	
	sumDepth(root, runningDepth, arrayToSum)
		
	return arrayToSum.reduce((x, y) => x + y) 
	
}

function sumDepth(node, runningDepth, arrayToSum ){
	if(!node){
		return
	}
	
  // depth of left side, which is found first
	runningDepth = runningDepth + 1

  // because depth is calculated by recursive loop, rightside depth is always minus 1 of running depth
	if(node.right === this.right){
		runningDepth = runningDepth - 1
	}
		
	arrayToSum.push(runningDepth)

	if(!node.left && !node.right){
		return arrayToSum
	}
	
	sumDepth(node.left, runningDepth, arrayToSum)
	sumDepth(node.right, runningDepth, arrayToSum)
	
}



// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
		
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;



// Attempt 2
// Time: O(n) since need to touch each
// Space: O(h) since call stack worse case holds depth of tree
function nodeDepths(root, depth = 0) {
  if (root === null) return 0
	return depth + nodeDepths(root.left, depth + 1) + nodeDepths(root.right, depth + 1)
}

// This is the class of the input binary tree.
class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths;
