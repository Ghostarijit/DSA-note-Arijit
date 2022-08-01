function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swep = false
        for (let j = 0; j <= arr.length - 2; j++) {
             if(arr[j]>arr[j+1]){
                [arr[j],arr[j+1]]=[arr[j+1],arr[j]]
                swep = true
             }
        }
        if(swep==false) break;
    }
    return arr
}

let res = BubbleSort([8,7,5,10,3,9])
console.log(res)


