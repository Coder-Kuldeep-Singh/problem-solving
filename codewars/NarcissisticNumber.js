// console.log(6 * 6 * 6 * 6);
function narcissistic(value) {
  var sum = 0;
  var Itoa = value.toString();
  var len = Itoa.length;
  for (var i = 0; i < len; i++) {
    var num = Itoa[i];
    var Atoi = parseInt(num);
    var power = Math.pow(Atoi, len);
    sum += power;
  }
  if (sum == value) {
    return true;
  } else {
    return false;
  }
}

var con = narcissistic(1635);
console.log(con);
