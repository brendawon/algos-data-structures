var inorderTraversal = function (root) {
  //store visited nodes
  let visited = [];
  let returnArr = [];
  let current = root;

  //loop through while there either are items in visited array or current node exists
  while (visited.length > 0 || current) {
    //while there is a current node (because sometimes it may be null after the logic below)
    while (current) {
      //add to visited array
      visited.push(current);

      //check left side of tree (when left does not exist, it will bypass this while loop)
      current = current.left;
    }
    // the previous while loop was bypassed which means the only condition that passed to remain in the initial while loop is that there are still items in visited array
    //make current = last item in the visited array
    current = visited.pop();

    //add current node's value to return
    returnArr.push(current.val);

    //make current = right side of tree to traverse the right side; if there is a right, it should still be in the loop
    current = current.right;
  }
  return returnArr;
};
