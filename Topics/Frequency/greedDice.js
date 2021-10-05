function score(dice) {
  //obj to count frequencies of dice roll values
  let obj = {};
  let points = 0;
  //add dice values to obj
  for (let i = 0; i < dice.length; i++) {
    if (obj[dice[i]]) {
      obj[dice[i]]++;
    } else {
      obj[dice[i]] = 1;
    }
  }

  //create threeTimes obj to store key/value point pairs
  let threeTimes = { 1: 1000, 6: 600, 5: 500, 4: 400, 3: 300, 2: 200 };
  //oneTime obj
  let oneTime = { 1: 100, 5: 50 };
  //loop through each roll to check freq
  for (let roll in obj) {
    if (obj[roll] >= 3) {
      //if any value occurs 3 or more times, use threeTimes obj for ref for points, decrement obj count frequency
      points += threeTimes[roll];
      obj[roll] -= 3;
    }
    //check if roll is a 1 or 5
    if (roll == 1 || roll == 5) {
      //then compare to oneTime points
      //multiply by remaining frequency (could be 1 or 2 times)
      let multiplier = obj[roll];
      points += oneTime[roll] * multiplier;
    }
  }
  return points;
}
