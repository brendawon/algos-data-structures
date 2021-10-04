function alphabetPosition(text) {
  //create obj with key:value pairs for letters and numbers
  let obj = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };
  let numStr = "";
  //loop through text and convert to lowercase
  for (let i = 0; i < text.length; i++) {
    //match letter to value in obj and add value to an empty string
    if (obj[text[i].toLowerCase()]) {
      numStr += obj[text[i].toLowerCase()] + " ";
    }
  }
  //remove the space at the end of the string
  return numStr.substr(0, numStr.length - 1);
}
