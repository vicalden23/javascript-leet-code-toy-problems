/**
	Given a positive integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

	Input: 3
	Output:
	[
	 [ 1, 2, 3 ],
	 [ 8, 9, 4 ],
	 [ 7, 6, 5 ]
	]
*/

let generateMatrix = function(n) {
    let matrix = []
    let start = 1
    let startColIndex = 0
    let endColIndex = n - 1
    let startRowIndex = 0
    let endRowIndex = n - 1
    
    for (let i = 0; i < n; i++) {
        matrix.push([])
    }
    while (start <= n * n) {
        for (let j = startColIndex; j <= endColIndex; j++) {
            matrix[startRowIndex][j] = start
            start++
        }
        startRowIndex++
        for (let k = startRowIndex; k <= endRowIndex; k++) {
            console.log(startRowIndex)
            matrix[k][endColIndex] = start
            start++
        }
        endColIndex--
        for (let m = endColIndex; m >= startColIndex; m--) {
            matrix[endRowIndex][m] = start
            start++
        }
        endRowIndex--
        for (let p = endRowIndex; p >= startRowIndex; p--) {
            matrix[p][startColIndex] = start
            console.log(start)
            start++
        }
        startColIndex++
    }
    return matrix
};
