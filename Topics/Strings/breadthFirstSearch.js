//uses queues, push, and shift (to remove from the front)

function breadthFirstSearch(root) {
  if (root === null) return [];
  let queue = [root];
  let results = [];

  while (queue.length > 0) {
    let current = queue.shift();
    results.push(current.val);
    if (current.left !== null) queue.push(current.left);
    if (current.right !== null) queue.push(current.right);
  }
  return results;
}
