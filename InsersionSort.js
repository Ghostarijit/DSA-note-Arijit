function InsersionSort(arr) {

    for (let i = 1; i < arr.length; i++) {

     
        while (i >= 1 && arr[i - 1] > arr[i]) {

            [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
            i-- 
        }
    }
    return arr
}
let res = InsersionSort([9,8,5,2,1])

console.log(res)


