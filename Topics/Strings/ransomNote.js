//using obj frequency counter
var canConstruct = function (ransomNote, magazine) {
  //objs to count frequency of characters
  let frequency = {};
  //loop through magazine to store counts
  for (let i = 0; i < magazine.length; i++) {
    if (frequency[magazine[i]]) {
      frequency[magazine[i]]++;
    } else {
      frequency[magazine[i]] = 1;
    }
  }
  //loop through ransomNote and decrement counts; return false if !obj[char]
  for (let i = 0; i < ransomNote.length; i++) {
    if (frequency[ransomNote[i]]) {
      frequency[ransomNote[i]]--;
    } else {
      return false;
    }
  }
  //return true outside of loop
  return true;
};

/*
var canConstruct = function(ransomNote, magazine) {
    //base case: magazine must be >= length of ransomNote
    //split strings into arrays, sort both
    let rSort = ransomNote.split("").sort();
    let mSort = magazine.split("").sort();
    //create match counter
    let match = 0;
    let rPointer = 0;
    let mPointer = 0;
    //rPointer and mPointer
    while (rPointer < ransomNote.length && mPointer < magazine.length){
    //iterate through ransonNote and check if letters = magazine letters, incrementing match and incrementing pointers if there is a match; if there is not a match, only increment mPointer
        if (rSort[rPointer] === mSort[mPointer]){
            match++;
            rPointer++;
        }
        mPointer++;
    }
    //outside of loop, compare match to length of ransomNote, if =, return true
    if (match === ransomNote.length) return true;
    return false;
};
*/
