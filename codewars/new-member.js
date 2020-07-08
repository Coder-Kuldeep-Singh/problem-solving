function openOrSenior(data) {
  var member = [];
  for (var i = 0; i < data.length; i++) {
    len = data[i].length;
    for (j = 0; j < len; j++) {
      if (j == 0) {
        if (data[i][j] >= 55 && data[i][1] > 7) {
          member.push("Senior");
        } else {
          member.push("Open");
        }
      }
    }
  }
  return member;
}

var arr = [
  [21, 21],
  [90, 8],
  [90, 8],
  [60, 12],
  [55, 10],
  [0, 0],
  [75, 11],
  [1, 1],
  [54, 9],
  [90, 9],
];
var array = openOrSenior(arr);
console.log(array);
