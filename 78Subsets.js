const nums = [1, 2, 3]

console.log(`The set is [${nums}]`)
console.log(`The subsets are: `)


//bit-wised solution
//[1, 2, 3] nums
//[0, 1, 0] selected by bit
//subset is [2]
//Cardinality of subsets is: 2 ** nums.length
const subsets = nums => {

	let res = []

	for (let i = 0; i < 2 ** nums.length; i++) {
		let b = i.toString(2)
		//console.log(b)
		
		let arr = [...b]
		//console.log(arr)

		let subSet = []

		for (let i = arr.length - 1; i > -1; i--		) {
			if (arr[i] === '1') {
			subSet.push(nums[i + nums.length - arr.length])
			//console.log('=======', nums[i + nums.length - arr.length])
			}

		}

		//console.log(subSet)
		res.push(subSet)

	}
	return res
};

console.log(subsets(nums))
