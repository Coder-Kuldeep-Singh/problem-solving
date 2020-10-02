var arr = [[11,2,4,5],[4,5,6,7],[10,8,-12,9],[34,45,67,78]];

// console.log(arr)
function RightToLeftDiagonal(arr){
  sum = 0;
  var indexes = arr.length-1;
  for(var i=0;i<arr.length;i++){
    sum += arr[i][indexes];
    indexes--
  }
  return sum
}
function LeftToRightDiagonal(arr){
   sum = 0;
  var indexes = 0;
  for(var i=0;i<arr.length;i++){
    sum += arr[i][indexes];
    indexes++
  }
  return sum
}
var sum1 = RightToLeftDiagonal(arr);
var sum2 = LeftToRightDiagonal(arr);
var difference = Math.abs(sum2-sum1)
console.log(difference);
