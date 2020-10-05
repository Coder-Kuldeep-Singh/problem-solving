// Array Manipulation Question
package main

// TargetedSum checks the target sum in array and return
// index
func TargetedSum(nums []int, target int) []int {
	for idx := range nums {
		for i := 1 + idx; i < len(nums); i++ {
			// log.Printf("index[%d]=%d---->%d------>index[%d],%d", idx, nums[idx], (target - nums[i]), i, nums[i])
			if nums[i] == (target - nums[idx]) {
				return []int{idx, i}
			}

		}
	}
	return []int{}
}

// func main() {
// 	target := 11
// 	arr := []int{2, 3, 4, 8}
// 	indexes := TargetedSum(arr, target)
// 	log.Println(indexes)
// }
