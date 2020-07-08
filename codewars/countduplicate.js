function duplicateCount(text) {
  let counts = {};
  var sum = 0;
  var characters = "";
  for (var i = 0; i <= text.length; i++) {
    if (counts[text[i]] === undefined) {
      counts[text[i]] = 1;
    } else {
      //   return true;
      sum++;
      //   console.log(text[i]);
      characters += text[i] + " ";
    }
  }
  console.log(sum, "character", characters);
}

duplicateCount("");
