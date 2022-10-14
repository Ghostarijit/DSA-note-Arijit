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
function checkTags(str) {
    let arr = str.split(/[<>]/).filter(x => x).filter(x => (x == "b" ||  x == "i" ||  x == "em" || x == "div" || x == "p" || x == "/b"||  x == "/i" || x == "/em" || x == "/div" || x == "/p"))
    let stack = []
    for (let i = 0; i < arr.length; i++) {
        let index = stack.indexOf(arr[i].slice(1))
        if (index !== -1) {
            stack.splice(index, 1)
        }
        else if (arr[i][0] != "/") stack.push(arr[i])
        else {
            return stack[stack.length - 1]
        }
    }
}
let str = "<div>abc</div><p><em><i>test test test</b></em></p>"
console.log(checkTags(str))