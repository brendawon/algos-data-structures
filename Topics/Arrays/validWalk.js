function isValidWalk(walk) {
  //need to have an equal number of s and n, and w and e
  //count Ns and Es, add to them when n or e appear, subtract when S or W appear
  let Ns = 0;
  let Es = 0;

  if (walk.length === 10) {
    for (let i = 0; i < 10; i++) {
      //if N or E are 0 after looping through array, return true
      if (walk[i] === "n") {
        Ns++;
      }
      if (walk[i] === "e") {
        Es++;
      }
      if (walk[i] === "s") {
        Ns--;
      }
      if (walk[i] === "w") {
        Es--;
      }
    }
    if (Ns === 0 && Es === 0) return true;
  }
  return false;
}
