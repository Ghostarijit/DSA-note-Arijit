 function intersection(nums) {

    let ele = nums.length
    
    let map = new Map()
    for(let i=0;i<nums.length;i++){
        for(let j=0;j<nums[i].length;j++){
            if(map.get(nums[i][j])==undefined) map.set(nums[i][j],1)
            else map.set(nums[i][j],map.get(nums[i][j])+1)
        }
    }
    let result = []
    for(let pairs of map){
        if(pairs[1]==ele) result.push(pairs[0])
    }
    return result.sort((a,b)=>a-b)
}

let res = intersection([[3,1,2,4,5],[1,2,3,4],[3,4,5,6]])
console.log(res)

// leetcode 2248