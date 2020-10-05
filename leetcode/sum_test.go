// Array Manipulation Question
package main

import (
	"log"
	"testing"
)

func Test(t *testing.T) {
	target := 11
	arr := []int{2, 3, 4, 8}
	indexes := TargetedSum(arr, target)
	log.Println(indexes)
}
