var mySqrt = function (x) {
  let root = 0;
  while (root * root < x) {
    if (root * root === x) {
      break;
    }
    root++;
  }
  if (root * root > x) {
    root--;
  }
  return root;
};
