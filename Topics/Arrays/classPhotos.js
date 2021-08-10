//AlgoExpert - Easy
//Given two arrays representing students' shirt colors and their heights, return true if: (1) students can be arranged in two rows in which each row contains only one color shirt and (2) the row in the back must be taller than the row in the front

//sort both arrays
//check index 0 of both and determine which array is the taller one
//loop through the remaining length and compare tall array [i] to short array [i]
//return false if short >= tall
//return true outside of loop

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => a-b);
        blueShirtHeights.sort((a,b) => a-b);
        let tall; 
        let short;
        redShirtHeights[0] > blueShirtHeights[0] ? tall = redShirtHeights : tall = blueShirtHeights;
        blueShirtHeights[0] > redShirtHeights[0] ? short = redShirtHeights : short = blueShirtHeights;
        if (redShirtHeights[0] === blueShirtHeights[0]) {
            return false;
      }
      for (let i = 1; i < tall.length; i++){
          if (tall[i] <= short[i]) {
              return false;
          }
      }
    return true;
  }

//sample input: 
// {
//     "blueShirtHeights": [5, 8, 1, 3, 4],
//     "redShirtHeights": [6, 9, 2, 4, 5]
// }
//expected output: true
