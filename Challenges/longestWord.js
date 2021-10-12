//given a string that may contain numbers, symbols, and letters, return the longest word
//words may include symbols, numbers such as in 'hello21$#@()'; ignore these and only count the letters towards the letter count

//store obj with length of word as key and word as value
//split string by " "
//loop through array of words
//use regex to determine if word contains non-letters at a specific index; use index to find length of the word, substr to store the word
//Object.keys, sort them from largest to smallest, find the largest key at [0], find the word that is stored in the obj
