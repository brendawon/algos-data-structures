function findClosestValueInBst(tree, target) {
  //find the smallest difference between the target and the values
  //var to store closest value
  let closest = tree.value;

  //var to store current node
  let current = tree;

  //while loop while currentNode is !== null to iterate through
  while (current !== null) {
    //find absolute value of difference between current node.value and target
    //if difference is smaller than difference between abs value of currentnode and target, closest = current value
    if (Math.abs(target - closest) > Math.abs(target - current.value)) {
      closest = current.value;
    }

    //if target is === currentNode, break out of loop since this is the closes value
    if (target === current.value) {
      break;
    } else if (target > current.value) {
      //if target > value, go to right side of tree; currentnode = currentnode.right
      current = current.right;
    } else {
      //if target < value, go to the left side of the tree
      current = current.left;
    }
  }
  return closest;
}

// This is the class of the input tree. Do not edit.
class BST {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}
