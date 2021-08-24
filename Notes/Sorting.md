# Sorting

Rearranging items so they are in some kind of order

JavaScript built in sort:

- arr.sort() will alphabetize strings but does not sort numbers in ascending/descending order, rather, by digit
- arr.sort((a, b) => a-b) will sort in numeric order
- arr.sort((a, b) => a.length-b.length) will sort by length of string

## Bubble Sort

Sorts the largest value to the end first (the largest value 'bubbles' to the 'top')

- Works well with almost sorted data
- Big O = O(n^2)
- Space is constant, O(1)

How to swap:
let temp = arr[idx1];
arr[indx1] = arr[indx2];
arr[indx2] = temp;

Single line swap:
[arr[indx1], arr[indx2]] = [arr[indx2], arr[indx1]];

## Selection Sort

Similar to bubble sort, but places small values first rather than the larger values

- Better than bubble sort only to reduce some memory as not as many swaps are being made
- Big O = O(n^2)
- Still inefficient even if data is almost sorted
- Space is constant, O(1)

## Insertion Sort

Gradually creates a larger left half which is always sorted (by inserting values in the correct spot)

- Big O = O(n^2)
- Works well with almost sorted data
- Space is constant, O(1)

## Merge Sort - split, merge, and sort

Breaks a large array into smaller arrays of 1 or 0 elements and then merge them

- Big O = O(n log n)
  - n log n because: arrays are split in half during each step (log n) and there is a while loop in the merge function (n)
- Space is O(n)

## Quick Sort

Like merge sort, split the array into 0 or 1 elements. Select one element (pivot point) and move all numbers less than it to the left and all the numbers greater than it to the right. Keep track of how man are less than or greatter than and then the pivot point is moved to the correct location. Recursively repeat the process with the other elements.

- Big O = O(n log n)
  - log n because there are decompositions, n comparisons for each decomposition
- Space is O(log n)

## Radix Sort - NOT a comparison sort

Never makes a comparison between two elements; just exploits the fact that more digits = larger number

- Places elements into buckets based on the right most digit; sort them in order; repeat the process with the next digit over
- Number of passes = the number of digits in the largest number

Helper function to return the digit at the given place value

- Big O = O(nk) where n is the length of the array and k is the number of digits
