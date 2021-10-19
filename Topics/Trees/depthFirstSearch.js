//use stacks, push, and pop for depth search

//iterative
function depthFirstSearch(root) {
  if (root === null) return [];

  //keeps track of visited
  let stack = [root];
  let results = [];

  while (stack.length > 0) {
    let current = stack.pop();
    results.push(current.val);

    //pushing the right side first because we want to the left side to be behind the right so when we pop off, we pop the left
    if (current.right) stack.push(current.right);
    if (current.left) stack.push(current.left);
  }
  return results;
}

//recursive
function depthFirstSearch(root) {
  if (root === null) return [];
  let leftValues = depthFirstSearch(root.left);
  let rightValues = depthFirstSearch(root.right);
  return [root.val, ...leftValues, ...rightValues];
}
