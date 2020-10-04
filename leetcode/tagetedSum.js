function TargetedSum(arr, target) {
    var sum = 0;
    var index = [];
    for (var idx = 0; idx < arr.length; idx++) {
        for (var i = 1; i < arr.length; i++) {
            if (idx == i) {
                continue;
            }
            sum = 0;
            sum = arr[idx] + arr[i]
            if (sum == target) {
                index.push(idx);
                index.push(i);
                console.log(sum);
                return index;
            }
        }
    }
}

var arr = [3, 4, 22, 23, 445, 56, 2];
var targetSum = 5;
var indexes = TargetedSum(arr, targetSum);
console.log(`Indexes---${indexes}`);