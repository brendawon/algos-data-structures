function PostOrder(root) {
  let result = [];
  function traverse(node) {
    if (node.left) traverse(node.left);
    if (node.right) traverse(node.right);
    result.push(node.value);
  }
  traverse(root);
  return result;
}
