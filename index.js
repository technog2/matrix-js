// create matrix
function matrix(arr) {
	if (typeof arr !== 'object') throw new Error('matrix input should be an array')

	arr.map(row => {
		if (typeof row !== 'object') throw new Error('rows should be a type array')
	})

	arr.i = arr.length
	arr.j = arr[0].length

	for (let i = 1; i < arr.i; i++) {
		if (arr[i].length !== arr.j) throw new Error(`columns should be ${arr.j} in row ${i + 1}`)
	}

	return arr
}

// addition of two matrices
matrix.sum = (a, b) => {
	if (a.i !== b.i || a.j !== b.j) throw new Error('the matrices must be of the same order')

	const arr = []

	for (let i = 0; i < a.i; i++) {
		arr.push([])

		for (let j = 0; j < a.j; j++) {
			arr[i].push(a[i][j] + b[i][j])
		}
	}

	arr.i = a.i
	arr.j = a.j

	return arr
}

// subtraction of two matrices
matrix.sub = (a, b) => {
	if (a.i !== b.i || a.j !== b.j) throw new Error('the matrices must be of the same order')

	const arr = []

	for (let i = 0; i < a.i; i++) {
		arr.push([])

		for (let j = 0; j < a.j; j++) {
			arr[i].push(a[i][j] - b[i][j])
		}
	}

	arr.i = a.i
	arr.j = a.j

	return arr
}

// multiplication of two matrices
matrix.mul = (a, b) => {
	if (typeof a === 'number') {
		const arr = []

		for (let i = 0; i < b.i; i++) {
			arr.push([])

			for (let j = 0; j < b.j; j++) {
				arr[i].push(a * b[i][j])
			}
		}

		arr.i = b.i
		arr.j = b.j

		return arr
	}
	else {
		if (a.j !== b.i) throw new Error('the columns of the first matrix must be equal to the rows of the second matrix')

		const arr = []

		for (let i = 0; i < a.i; i++) {
			arr.push([])

			for (let j = 0; j < b.j; j++) {
				let sum = 0

				for (let k = 0; k < b.i; k++) {
					sum += a[i][k] * b[k][j]
				}

				arr[i][j] = sum
			}
		}

		arr.i = a.i
		arr.j = b.j

		return arr
	}
}

// exponentiation of the matrix
matrix.pow = (m, power) => {
	if (typeof m !== 'object' || typeof power !== 'number') throw new Error('the first value should be an array and the second value should be a number')

	let arr = m

	for (let i = 1; i < power; i++) {
		arr = matrix.mul(arr, m)
	}

	arr.i = m.i
	arr.j = m.j

	return arr
}

// determinant of the matrix
matrix.det = m => {
	if (m.i !== m.j) throw new Error('the matrix should be square')

	if (m.i === 2) return (m[0][0] * m[1][1]) - (m[0][1] * m[1][0])
	if (m.i === 3) return ((m[0][0] * m[1][1] * m[2][2]) + (m[0][1] * m[1][0] * m[2][0]) + (m[0][2] * m[1][0] * m[2][1])) - ((m[0][2] * m[1][1] * m[2][0]) + (m[0][1] * m[1][0] * m[2][2]) + (m[0][0] * m[1][2] * m[2][1]))
}

// matrix inverse
matrix.inv = m => {
	if (m.i !== m.j) throw new Error('the matrix should be square')

	let arr = matrix([
		[m[1][1], -m[0][1]],
		[-m[1][0], m[0][0]],
	])

	return matrix.mul(1 / matrix.det(m), arr)
}

export default matrix