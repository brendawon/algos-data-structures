var reverseList = function (head) {
  //edge case: if list is empty, return empty list
  if (!head) return head;
  //current node, previous, and next node pointers
  let current = head;
  let previous = null;
  //while current exists, continue to iterate through list
  while (current) {
    let next = current.next;
    //set current node's next = previous (when we are at the start of the list and there is no previous, this makes the head the tail (so its next becomes null))
    current.next = previous;
    //now previous becomes the current node (so in the next iteration the current.next will point to the node before it)
    previous = current;
    //move current along to iterate through
    current = next;
  }
  //return list
  return previous;
};
