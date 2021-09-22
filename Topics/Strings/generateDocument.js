function generateDocument(characters, document) {
  let charObj = {};
  for (let i = 0; i < characters.length; i++) {
    if (charObj[characters[i]]) {
      charObj[characters[i]]++;
    } else {
      charObj[characters[i]] = 1;
    }
  }
  for (let j = 0; j < document.length; j++) {
    if (charObj[document[j]] > 0) {
      //if letter from character is in document, it should be greater than 0
      charObj[document[j]]--;
    } else {
      //cannot decrement if the obj value is 0
      return false;
    }
  }
  console.log("characters left after both loops", charObj);
  return true;
}

//need to go through document and remove them from characters
//loop through characters to create an object variable, incrementing the value for the character key
//loop through the document to see if the characters in it are in the obj, decrement
