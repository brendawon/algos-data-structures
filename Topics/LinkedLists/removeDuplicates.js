//AlgoExpert - Easy

// This is an input class. Do not edit.
class LinkedList {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  //input: singly linked list, nodes in sorted order
  //output: linkedlist that has no duplicate values
  //approach: 
  //1. using pointers, iterate through the list until tail is reached; while (current is not null)
  //2. pointers: current node and next node
  //3. while there is a next value (next is not the tail) AND while current value is equal to next value, then reassign linkedList.next(which is next) to linkedList.next.next (next.next)
  //4. reassign pointers so that current = linkedList.next and current.next = next
  //5. return linkedList
  function removeDuplicatesFromLinkedList(linkedList) {
    // code:
      let current = linkedList; 
      let next;
      while (current !== null){
          next = current.next;
              while(next !== null && current.value === next.value){
                  next = next.next;
          }
          current.next = next;
          current = next;
      }
    return linkedList;
  }

//sample input:
// removeDuplicatesFromLinkedList({
//     "linkedList": {
//       "head": "1",
//       "nodes": [
//         {"id": "1", "next": "1-2", "value": 1},
//         {"id": "1-2", "next": "1-3", "value": 1},
//         {"id": "1-3", "next": "2", "value": 1},
//         {"id": "2", "next": "3", "value": 3},
//         {"id": "3", "next": "3-2", "value": 4},
//         {"id": "3-2", "next": "3-3", "value": 4},
//         {"id": "3-3", "next": "4", "value": 4},
//         {"id": "4", "next": "5", "value": 5},
//         {"id": "5", "next": "5-2", "value": 6},
//         {"id": "5-2", "next": null, "value": 6}
//       ]
//     }
//   })

//expected output:
// {
//     "head": "1",
//     "nodes": [
//       {"id": "1", "next": "3", "value": 1},
//       {"id": "3", "next": "4", "value": 3},
//       {"id": "4", "next": "5", "value": 4},
//       {"id": "5", "next": "6", "value": 5},
//       {"id": "6", "next": null, "value": 6}
//     ]
//   }
  