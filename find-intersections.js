// return an array of numbers that exist in all of the arrays passed in

let findIntersections = (...arrays) => {
	let numOfArrays = arrays.length
	let ref = {}
	let intersections = []
	for (let i = 0; i < arrays.length; i++) {
		for (let j = 0; j < arrays[0].length; j++) {
			let curr = arrays[i][j]
			if (ref[curr]) ref[curr]++
			else ref[curr] = 1
		}
	}
	for (let key in ref) {
		if (ref[key] === numOfArrays) intersections.push(Number(key))
	}
	return intersections
}
