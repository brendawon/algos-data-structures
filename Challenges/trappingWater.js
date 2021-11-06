var trap = function (height) {
  // initially assume the first and last values to be the maximum heights
  let maxLeft = height[0];
  let maxRight = height[height.length - 1];

  /* Here we take i as 2nd el(ie index 1) and j as prev of last el(height.length-2)
        because we clearly know the 1st el and last el can't trap any water(it will overflow to its other sides) */
  let i = 1;
  let j = height.length - 2;
  let total = 0;

  while (i <= j) {
    // we need to increase the pointer where the height is less(either left or right)
    // used <= because we sometimes encounter same height on both sides
    if (maxLeft <= maxRight) {
      // the diff between max capacity and curr height will give the amt of water that could be trapped
      // sometimes the curr will have greater val than max & we may end with -ve values so check if its greater than 0
      if (maxLeft - height[i] > 0) {
        total += maxLeft - height[i];
      }
      // update max
      maxLeft = Math.max(height[i], maxLeft);
      i++;
    } else {
      if (maxRight - height[j] > 0) {
        total += maxRight - height[j];
      }
      maxRight = Math.max(height[j], maxRight);
      j--;
    }
  }
  return total;
};
