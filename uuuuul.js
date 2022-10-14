let arr = [1, 2,[3, 4,[5]]]


function flattenArr(arr){

    let flatt =[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray==false){
            flatt.push(arr[i])
        }
        else flatt = flatt.concat(flattenArr(arr[i]))
    }

return flatt
}

let res = flattenArr([1, 2,[3, 4,]])

console.log(res)



let marge = (arr1,arr2)=>{

    let res=[]
    let i=0;
    let j=0
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<=arr2[j]){
            res.push(arr1[i])
            i++
        }else {
            res.push(arr2[j])
            j++
        }
    }

    while(i<arr1.length){
        res.push(arr1[i])
        i++
    }

    while(j<arr2.length){
        res.push(arr2[j])
        j++
    }

    return res
}




function sort(arr){
    if(arr.length <=1) return arr
    let mid = Math.floor(arr.length/2)
    let left = sort(arr.slice(0,mid))
    let right = sort(arr.slice(mid))

     return marge(left,right)
}

let result = sort([3,1,8,7,5])
console.log(result)



