# Tree Traversal

Time complexity is the same

## Breadth First

Searches each level of the tree from top to bottom
May use a lot of space if the tree's width is large

## Depth First

May use a lot of space if the depth is large

- In order: useful when trying to sort the values from least to greatest
  - Go to the leftmost node, record it, to to right node, record it, go back to parent node, record it and so on
- Pre order: useful when trying to collapse tree and copy it
  - records root, goes to left node, records it, checks for more left nodes, records them, checks their right nodes, records then, goes back to right side of root and does the same
- Post order:
  - go to the leftmost side, record all the child nodes of the last parent, go back to parent and record; the root is the last one to be recorded
