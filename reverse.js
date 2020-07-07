var arr = [1, 3, 35, 6, 7, 8];
function ReverseArray(arr) {
  var len = arr.length;
  for (var i = 1; i <= len; i++) {
    len1 = len - i;
    console.log(arr[len1]);
  }
}

ReverseArray(arr);
