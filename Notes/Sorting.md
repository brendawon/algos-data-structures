# Sorting 
Rearranging items so they are in some kind of order

JavaScript built in sort:
- arr.sort() will alphabetize strings but does not sort numbers in ascending/descending order, rather, by digit
- arr.sort((a, b) => a-b) will sort in numeric order
- arr.sort((a, b) => a.length-b.length) will sort by length of string

## Bubble Sort
Sorts the largest value to the end first (the largest value 'bubbles' to the 'top')

How to swap: 
let temp = arr[idx1];
arr[indx1] = arr[indx2];
arr[indx2] = temp;

Single line swap: 
[arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];

## Selection Sort

## Insertion Sort