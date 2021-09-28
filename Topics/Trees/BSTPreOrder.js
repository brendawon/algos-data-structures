var preorderTraversal = function (root) {
  let visited = [];
  let returnArr = [];
  let currentNode = root;

  while (visited.length > 0 || currentNode) {
    while (currentNode) {
      visited.push(currentNode);
      returnArr.push(currentNode.val);
      currentNode = currentNode.left;
    }
    currentNode = visited.pop();
    currentNode = currentNode.right;
  }
  return returnArr;
};
