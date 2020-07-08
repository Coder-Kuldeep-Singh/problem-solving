package main

import "fmt"

func reverse(arr [3]int) []int {
	TotalLength := len(arr) //finding length of the array
	// Debugging
	// fmt.Println(TotalLength)
	var reverse_array []int //creating the array to return reverse order of arry
	for i, _ := range arr {
		i++                                            // make i value one to index bound problem got solved
		from_back := TotalLength - i                   //revesing the index
		reverse := arr[from_back]                      //finally reversing all values
		reverse_array = append(reverse_array, reverse) //appending data one by one to new array/slice
	}
	return reverse_array
}
func main() {
	var arr = [3]int{121, 223, 454545}
	rev := reverse(arr)
	fmt.Println(rev)
}
