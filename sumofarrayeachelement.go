package main

import (
	"fmt"
	"strconv"
	"strings"
)

func main() {
	values := [3]int{23512121212122, 3324, 532}
	for _, arr := range values {
		length := strconv.Itoa(arr)

		//Debugging
		//fmt.Println("lengths", length)

		splits := strings.Split(length, "")

		sum := 0
		for _, spl := range splits {
			number, _ := strconv.Atoi(spl)
			sum += number
			//fmt.Println("    ", spl)
		}
		fmt.Printf("%v = %v\n", splits, sum)

	}

}
