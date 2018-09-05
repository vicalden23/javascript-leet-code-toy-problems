/**
    Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

    For example, given the following triangle

    [
         [2],
        [3,4],
       [6,5,7],
      [4,1,8,3]
    ]
    The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
 */

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
let total = 0

if(!triangle[0]) return Math.min(...triangle)

if (triangle.length < 3) {
    for (let i = 0; i < triangle.length; i++) {
        total += Math.min(...triangle[i])
    }
} else {
    let currentIndex
    for (let i = 0; i < 2; i++) {
        currentIndex = triangle[i].indexOf(Math.min(...triangle[i]))
        total += Math.min(...triangle[i])
    }
    
    for (let i = 2; i < triangle.length; i++) {
        let currentSet
        if (currentIndex === 0) {
            currentSet = triangle[i].slice(0, 2)
        } else if (currentIndex === triangle[i].length - 1) {
            currentSet = triangle[i].slice(currentIndex - 1)
        } else {
            currentSet = triangle[i].slice(currentIndex - 1, currentIndex + 2)   
        }
        currentIndex = triangle[i].indexOf(Math.min(...currentSet))
        total += Math.min(...currentSet)
    }
}
return total
};
