function Odd_Even_Sum(arr) {
  // var Odd_array = [];
  // var Even_array = [];
  // var Even_sum = 0; //All array Even Values sum
  // var Odd_sum = 0; //All array Odd Values sum
  for (var i = 0; i < arr.length; i++) {
    // console.log(arr[i])
    var Itoa = arr[i].toString();
    var len = Itoa.length;
    var Odd_array = [];
    var Even_array = [];
    var Even_sum = 0; //Array Index Even Values sum
    var Odd_sum = 0; //Array Index Odd Values sum
    for (j = 0; j < len; j++) {
      var Sindex = Itoa[j];
      // Sindex = Sindex.replace(" ","",-1)
      var Atoi = parseInt(Sindex);
      if (Atoi % 2 == 0) {
        // console.log()
        Even_array.push(Atoi);
        Even_sum += Atoi;
      } else {
        Odd_array.push(Atoi);
        Odd_sum += Atoi;
      }
      // console.log(Sindex);
    }
    // console.log("Odd Array ",Odd_array, " Index ",i)
    // console.log("Even Array ",Even_array, " Index ",i)
    // console.log(arr[i])
    // console.log(Itoa)
    console.log(
      "--------------------------------- index",
      i,
      "--------------------------------------------"
    );
    console.log(
      "Even Array",
      Even_array,
      "of the index",
      i,
      " and the Sum ",
      Even_sum
    );
    console.log(
      "Odd Array",
      Odd_array,
      "of the index",
      i,
      " and the Sum ",
      Odd_sum
    );
    console.log(
      "----------------------------------- END --------------------------------------"
    );
  }
  // console.log("Even ",Even_array, " Sum ",Even_sum)
  // console.log("Odd ",Odd_array, " Sum ",Odd_sum)
}
var arr = [12122, 53534, 546456, 131223, 121232, 34334];
Odd_Even_Sum(arr);
