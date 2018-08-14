/**
	* Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
  *
	* Example:
	*
	* Input: [-2,1,-3,4,-1,2,1,-5,4],
	* Output: 6
	* Explanation: [4,-1,2,1] has the largest sum = 6.
	*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxSubArray = function(nums) {
  let sum = 0
  let total = 0
  let allNegatives = negatives(nums)
  if (allNegatives) total = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (allNegatives) {
      total = Math.max(total, nums[i])
    } else {
      sum = Math.max(0, sum + nums[i])
      total = Math.max(sum, total)
    }
  }
  return total
};

function negatives(nums) {
  let negatives = nums.filter((num) => {
    return num < 0
  })
  return negatives.length === nums.length
}


