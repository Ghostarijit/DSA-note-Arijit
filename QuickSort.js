function Quicksort(arr){
if(arr.length<2) return arr
    let pivot=arr[arr.length-1]
    let left = []
    let right=[]
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]<pivot) left.push(arr[i])
        else right.push(arr[i])
    }

    return [...Quicksort(left),pivot,...Quicksort(right)]
}

let res = Quicksort([8,2,1,6,7,5])
console.log(res)




const terget =(tergetsum,numbers,memo={})=>{
if(tergetsum in memo) return memo[tergetsum]
if(tergetsum === 0) return true
if(tergetsum <0) return false
for(let num of numbers){
    const reminder = tergetsum - num
    if(terget(reminder,numbers,memo)===true){
        memo[tergetsum] = true 
    }
}
}