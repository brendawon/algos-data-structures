function plusMinus(arr) {
  //create Map to store frequency counts
  let counts = new Map();
  counts.set("pos", 0);
  counts.set("neg", 0);
  counts.set("zero", 0);
  //loop through array and count positives, negatives, zeros
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      counts.set("pos", counts.get("pos") + 1);
    } else if (arr[i] < 0) {
      counts.set("neg", counts.get("neg") + 1);
    } else {
      counts.set("zero", counts.get("zero") + 1);
    }
  }
  //use to fixed to round to number of decimal places specified in question
  console.log((counts.get("pos") / arr.length).toFixed(6));
  console.log((counts.get("neg") / arr.length).toFixed(6));
  console.log((counts.get("zero") / arr.length).toFixed(6));
}
