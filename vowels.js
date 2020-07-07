var arr = ["e", "p", "u", "o", "kuldeep", "singh"];
function CheckVowels(arr) {
  for (var i = 0; i < arr.length; i++) {
    var len = arr[i].length;
    //     console.log(len);
    var dimension = arr[i];
    if (len > 1) {
      for (var j = 0; j < len; j++) {
        var arr1 = arr[i][j];

        Vowels(arr1, dimension, j);
      }
    } else if (len == 1) {
      Vowels(arr[i], dimension, i);
    } else {
      console.log("Array Is Empty");
    }
  }
}

function Vowels(arr1, dimension, index) {
  var arr = arr1.ToLowerCase;
  if (arr1 == "a" || arr1 == "e" || arr1 == "i" || arr1 == "o" || arr1 == "u") {
    console.log(arr1, "[" + dimension + "]", " Index " + index);
  }
}
CheckVowels(arr);
