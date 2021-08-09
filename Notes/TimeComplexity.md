# Complexity Scale (best case to worst case scenario):
O(1) > O(log n) > O(n) > O(n log n) > O(n^2) > O (n!)

# Rules of Thumb
1. Arithmetic operations are constants = O(1)
2. Variable assignment is constant = O(1)
3. Accessing elements in an array (by index) or object (by key) is constant = O(1)
4. In a loop, the time complexity is the length of the loop times the complexity of whatever happens inside of the loop

# Logarithms 
The log of a number *roughly* measures the number of times you can divide the number by 2 before you get a value <= 1
1. Certain searching algorithms have log *time* complexity
2. Efficient sorting algorithms
3. Recursion *sometimes* involves log *space* complexity

# Objects
1. Use when you don't need order
2. When you need fast access = O(1), insertion = O(1), removal = O(1)
3. Searching is O(n)
# Object Methods
1. O(n) - Object.keys, Object.values, Object.entries
2. O(1) - hasOwnProperty

# Arrays
1. Use when you need order
2. When you need fast access = O(1)
3. Searching is O(n)
4. Insertion and removal varies
    - O(1) when it's at the end
    - O(n) when it's at the beginning(because then the indices of the other items need to be changed)
    - push & pop are faster than shift and unshift
# Array Methods
1. O(n) - shift, unshift, concat, slice, splice, forEach/map/filter/reduce
2. O(1) - push, pop
3. O(n log n) - sort