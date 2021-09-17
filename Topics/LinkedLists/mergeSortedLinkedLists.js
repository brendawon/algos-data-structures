function mergeLinkedLists(headOne, headTwo) {
  //add values from headTwo to headOne to merge them
  //need three pointers, previousNode, currentHeadOne, currentHeadTwo
  let prevNode = null;
  let h1 = headOne;
  let h2 = headTwo;

  //iterate through nodes while there are still values in them
  while (h1 !== null && h2 !== null) {
    if (h1.value < h2.value) {
      //assign the previous node = the smaller of the two nodes (h1)
      prevNode = h1;
      //reassign h1 = the next value so we can iterate through the node
      h1 = h1.next;
    } else {
      //when h2.val < h1.val
      //if the prevNode is not null (meaning we have already added a node to the list)
      if (prevNode !== null) {
        //point the prevNode to the current node (which is the smaller node - h2) with .next
        prevNode.next = h2;
      }
      //now to iterate through, move prevNode to = the smaller node, h2
      prevNode = h2;
      //move the 2nd node along with h2.next
      h2 = h2.next;
      //bring back reference to the 1st node that is being added to with prevNode.next = h1
      prevNode.next = h1;
    }
  }

  //if we reached the end of h1, add the rest of the 2nd node
  //we don't need to consider if node 2 is null because we have just been adding on to the 1st node anyway and can return it
  if (h1 === null) {
    prevNode.next = h2;
  }
  //checking which node has the lower head value to decide which one to use as the return node (and add the other node values to)
  if (headOne.value < headTwo.value) return headOne;
  return headTwo;
}
