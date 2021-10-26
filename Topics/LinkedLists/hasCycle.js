var hasCycle = function (head) {
  let fastPointer = head;
  let lagPointer = head;

  while (fastPointer !== null) {
    lagPointer = lagPointer.next;

    if (fastPointer.next === null) return false;
    //travels twice as fast as lagging pointer. if a cycle exists,
    //it will equal the lagging pointer at some point
    fastPointer = fastPointer.next.next;
    if (fastPointer === lagPointer) return true;
  }
  return false;
};

//O(n) time and O(n) memory
// var hasCycle = function (head) {
//     let seen_node_set = new Set();

//     let current_node = head;
//     while (current_node != null) {
//         if (seen_node_set.has(current_node)) return true;
//         seen_node_set.add(current_node);

//         current_node = current_node.next;
//     }
//     return false
// };
