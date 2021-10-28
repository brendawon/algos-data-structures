const calculate = (s) => {
  s = s.split(" ").join(""); // replace space with empty

  const stack = [];
  let prevSign = "+";
  let i = 0;
  // // Split the string with prevSign into an array
  const splitNumbers = s.split(prevSign);
  console.log("Split Number -> ", splitNumbers);
  // // If splitNumbers includes "."
  // // replace "." ""
  // // Final integer numbers
  // const integers = splitNumbers.map(num => num.includes(".") ? num.replace(".", "") : num)
  // console.log("Final number -> ",integers)
  // s=integers.join(prevSign);
  // console.log("updated S -> ", s)

  // iterate all chars in str
  while (i < s.length) {
    let char = s[i];
    let nextChar = s[i + 1];
    let nextNextChar = s[i + 2];
    // String -> S,t,r
    // String "1+2.23" -> ["1"]+["2.23"]

    if (
      !isDigit(char) &&
      !isDigit(nextChar) &&
      nextChar !== "-" &&
      !isDigit(nextNextChar)
    )
      return "error";

    // if there is a letter in input, Invalid
    if (char.toLowerCase() != char.toUpperCase()) return "Invalid Input";

    // if we meet brackets
    if (char === "(") {
      let leftBlock = 1;
      let j = i + 1;

      // until the block is close which means left_block reduce to zero
      while (j < s.length && leftBlock > 0) {
        if (s[j] === "(") leftBlock++;
        if (s[j] === ")") leftBlock--;
        j++;
      }

      // include all elements in the closed block recursively
      let innerBlockValue = calculate(s.substring(i + 1, j - 1));

      //place the i to the position after close block
      //get back from recursive result and add to current stack
      i = j;

      // Do the calculation process!!
      operation(innerBlockValue, prevSign, stack);
    } else if (isDigit(char)) {
      let index = i;
      let num = 0;

      while (index < s.length && isDigit(s[index])) {
        // e.g. '12' -> 1 * 10 + 2
        // e.g. '452' -> 4 * 10 + 5 = 45, 45 * 10 + 2 = 452
        let decimal = parseFloat(s.split(prevSign));
        num = num * 10 + parseInt(s[index++]);
      }
      // if(s[index++].includes(".")) {
      //   num = parseFloat(s[index++]);
      // }

      i = index;
      operation(num, prevSign, stack);
    } else {
      prevSign = char;
      i++;
    }
  }

  let result = 0;
  while (stack.length !== 0) result += stack.pop();
  return result;
};

const isDigit = (char) => {
  if (char >= "0" && char <= "9") {
    return true;
  } else {
    return false;
  }
};

const operation = (num, sign, stack) => {
  if (sign == "+") {
    stack.push(num); //+ just add value to stack
  } else if (sign === "-") {
    stack.push(-num); //- add -value to stack
  } else if (sign === "*") {
    // since the * have piority pop previous number and do * then push back
    stack.push(stack.pop() * num);
  } else if (sign === "/") {
    // since the * have piority pop previous number and do * then push back
    stack.push(stack.pop() / num);
  }
};

console.log(calculate("1 + 2"), 3);
console.log(calculate("1 + 23 * 2"), 47);
console.log(calculate("1 + -23 * 2"), -45);
console.log(calculate("1 + -2 --5"), -6);
console.log(calculate("4*5/2"), 10);
console.log(calculate("19 + cinnamon"), "Invalid Input");
console.log(calculate("1 +-2--5"), -6);
console.log(calculate("2*(5+5*2)/3+(6/2+8)"), 21);

// console.log(calculate("1 + 2.2"), 3.2)
// console.log(calculate("1 + 2.23"), 3.23)
console.log(calculate("-.32 /.5"), -0.64);
console.log(calculate("(4-2)*3.5"), 7);
console.log(calculate("2+-+-4"), "error");
console.log(calculate("2+-4"), "-2");
