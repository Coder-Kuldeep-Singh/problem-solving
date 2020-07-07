var arr = [1212, 23232, 34343, 35454, 5655, 23232, 1212];
function ArrayIndexSum(arr) {
  for (var i = 0; i < arr.length; i++) {
    var n = arr[i].toString();
    var res = n.split("");
    var sum = 0;
    for (j = 0; j < res.length; j++) {
      n2s = parseInt(res[j]);
      sum += n2s;
    }
    console.log(res, " = ", sum);
  }
}
ArrayIndexSum(arr);
