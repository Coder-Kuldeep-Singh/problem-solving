// TwoSum
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.
// Example 1:
// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Output: Because nums[0] + nums[1] == 9, we return [0, 1].

// Example 2:
// Input: nums = [3,2,4], target = 6
// Output: [1,2]

// Example 3:
// Input: nums = [3,3], target = 6
// Output: [0,1]

// method one takes 212 ms to return indexes
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

// method two takes 184 ms to return indexes
function TargetedSumMethodTwo(nums, target) {
    for (var idx = 0; idx < nums.length; idx++) {
        for (var i = 1 + idx; i < nums.length; i++) {
            if (idx == i) {
                continue;
            }
            if (target == (nums[idx] + nums[i])) {
                return new Array(idx, i);
            }

        }
    }
}

// method 3
function TargetedSumMethodThree(nums, target) {
    for (var idx = 0; idx < nums.length; idx++) {
        for (var i = 1 + idx; i < nums.length; i++) {
            if (nums[i] == (target - nums[idx])) {
                return new Array(idx, i);
            }
        }
    }
}



var arr = [3, 4, 22, 23, 445, 56, 2];
var targetSum = 25;
var indexes = TargetedSumMethodThree(arr, targetSum);
console.log(`Indexes---[${indexes}]`);