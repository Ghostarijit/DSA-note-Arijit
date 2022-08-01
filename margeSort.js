const merge = (arr1,arr2)=>{
    let result =[]
    let i=0
    let j=0                                         // [1,2]
    while(i<arr1.length && j<arr2.length){         // [3,1,6]  [1,2,3]
        if(arr1[i]<=arr2[j]){                      //    i          j
            result.push(arr1[i])
            i++
        }else{
            result.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        result.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        result.push(arr2[j])
        j++
    }
    return result
}



var sortArray = function(nums) {
    if(nums.length<=1) return nums
    let mid = Math.floor(nums.length/2)
    let left = sortArray(nums.slice(0,mid))
    let right = sortArray(nums.slice(mid))
                          
        return merge(left,right)
    
};

let res = sortArray([3,2,1,68,12,15,10])
console.log(res)

