/**

	Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

	Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

	Note: You are not suppose to use the library's sort function for this problem.

	Example:

	Input: [2,0,2,1,1,0]
	Output: [0,0,1,1,2,2]

	*/

let sortColors = function(nums) {
  let redIndex = 0
  let blueIndex = nums.length - 1
  let i = 0
  
  while (i <= blueIndex) {
    if (nums[i] === 0) {
       swap(nums, i++, redIndex++)
    } else if (nums[i] === 2) {
       swap (nums, i, blueIndex--)
    } else {
       i++
    }
  }
};

function swap(nums, i, j) {
  let temp = nums[i]
  nums[i] = nums[j]
  nums[j] = temp
}
