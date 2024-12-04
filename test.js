import matrix from './index.js'

const A = matrix([
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
])
const B = matrix([
	[9, 8, 7],
	[6, 5, 4],
	[3, 2, 1],
])
const C = matrix.sum(A, B)
const D = matrix.sub(A, B)
const E = matrix.mul(2, A)
const F = matrix.mul(A, B)
const G = matrix([[1, 2, 3, 4, 5]])
const H = matrix([[1],[2],[3],[4],[5]])
const I = matrix([
	[1, 0, 0],
	[0, 1, 0],
	[0, 0, 1],
])
const J = matrix.pow(A, 3)
const K = matrix([
	[1, 2],
	[3, 4],
])

// console.log(A)
// console.log(B)
// console.log(C)
// console.log(D)
// console.log(E)
// console.log(F)
console.log(matrix.inv(K))