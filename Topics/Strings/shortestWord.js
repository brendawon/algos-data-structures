function findShort(s) {
  //split words with " "
  let words = s.split(" ");
  //shortest var
  let shortest = Infinity;

  //loop through array and if length of array[i] is < shortest, replace
  for (let i = 0; i < words.length; i++) {
    shortest = Math.min(shortest, words[i].length);
    //or do this swap
    //     if(words[i].length < shortest){
    //     shortest = words[i].length;
    //   }
  }
  //return shortest
  return shortest;
}
