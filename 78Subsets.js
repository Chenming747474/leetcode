const nums = [1, 2, 3]

console.log(`The set is [${nums}]`)
console.log(`The subsets are: `)


//bit-wised bitmask solution
//[1, 2, 3] nums
//[0, 1, 0] bitmask
//subset is [2]
//Cardinality of subsets is: 2 ** nums.length
const subsets = nums => {

	let res = []

	for (let i = 0; i < 2 ** nums.length; i++) {
		let b = i.toString(2)
		//console.log(b)
		
		let arr = [...b]
		//bitmask
		//console.log(arr)

		let subSet = []

		arr.forEach( (v, i) => {
			
			if (v === '1') {
				subSet.push(nums[i + nums.length - arr.length])
				//console.log('=======', nums[i + nums.length - arr.length])	
				}
			}
		)

		//console.log(subSet)
		res.push(subSet)

	}
	return res
};

console.log(subsets(nums))

//==============

const subsets1 = nums => {

        let res = []

        for (let i = 0; i < 2 ** nums.length; i++) {
                let b = i.toString(2)
                //console.log(b)
		
		let arr = new Array(nums.length - b.length).fill('0')
                //console.log(arr)  

		arr.push(...b)
                //bitmask
                //console.log(arr)

                let subSet = []

                arr.forEach( (v, i) => {

                        if (v === '1') {
                                subSet.push(nums[i])        
                                }
                        }
                )

                //console.log(subSet)
                res.push(subSet)

        }
        return res
};

console.log(subsets1(nums))

//================
//recursive ver. backtracking
//
//


const subsets2 = nums => {

	const res = [[], ]
	const InitSubSet = []

	const recur = (subSet, index) => {
		for (let i = index; i < nums.length; i++) {
			
			let nextSubSet = [...subSet, nums[i]]
			res.push(nextSubSet)

			recur(nextSubSet, i + 1)
			
		}
		
	}

	recur(InitSubSet, 0)

	return res
}

console.log(subsets2(nums))


