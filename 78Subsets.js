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

//----------

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
		for (let i = index; i < nums.length; ) {
			
			let nextSubSet = [...subSet, nums[i]]
			res.push(nextSubSet)
			i ++
			recur(nextSubSet, i)
			
		}
		
	}

	recur(InitSubSet, 0)

	return res
}

console.log(subsets2(nums))

//--------
//
//array.shift()
//
//
const subsets3 = nums => {

        const res = [[], ]
        const InitSubSet = []

        const recur = (subSet, remain) => {
                

		while (true) {

			let leftMost = remain.shift()
			if (leftMost === undefined) break

                        let nextSubSet = [...subSet, leftMost]
                        res.push(nextSubSet)

                        recur(nextSubSet, [...remain])
		}
        

        }

        recur(InitSubSet, nums)

        return res
}

console.log(subsets3(nums))

//==========================


const subsets4 = (nums) => {

	let bitmask = []
	let depth = 0
	let subSets = []
	const bt = () => {
		if (depth < nums.length) {
			bitmask.push(0)
			depth++
			bt()
			bitmask.pop()

			bitmask.push(1)
			depth++
			bt()
			bitmask.pop()

			depth--
		} else {
			// console.log(bitmask)
			let subSet = []
			bitmask.forEach((val, idx) => {
				if (val) subSet.push(nums[idx])
			})
			subSets.push(subSet)
			depth--
		}
	}

	bt()

	return subSets
}


console.log(subsets4(nums));
