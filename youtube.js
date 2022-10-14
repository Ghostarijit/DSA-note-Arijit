let express = require("express")

let app = express()

app.get("/postman",(req,res)=>{
   
      res.send("hii, Arijit,I love you")
     
})
app.listen(4000,console.log("Server connected"))





var arr = [3, 2, 1, 5, 4]

for (let i = 1; i <= 2; i++) {

    let max = Math.max(...arr)

    let min = Math.min(...arr)

    let maxInd = arr.indexOf(max)
    let minInd = arr.indexOf(min)

    arr.splice(maxInd, 1)
    arr.splice(minInd, 1)
    arr.push(max - min)


    console.log(arr.reduce((a,b)=>a+b))


}

let s = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"
let ar = s.split("")

let map = new Map()

for (let i = 0; i < ar.length; i++) {

    if (map.get(ar[i]) == undefined && /^[a-z-A-Z]/.test(ar[i])) map.set(ar[i], 1)
    else if (/^[a-z-A-Z]/.test(ar[i])) map.set(ar[i], map.get(ar[i]) + 1)
}

let map2 = new Map()



    var arr = []
   
    for (let pairs of map) {
        
            arr.push(pairs[1])
        
    }
    let res = BubbleSort(arr)

for(let i=0;i<res.length;i++){

    for(let pairs of map){
        if(res[i]==pairs[1]){
            map2.set(pairs[0],pairs[1])
            map.delete(pairs[0])
           }
    }
}

//console.log(map2)


function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let swep = false
        for (let j = 0; j <= arr.length - 2; j++) {
            if (arr[j] < arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
                swep = true
            }
        }
        if (swep == false) break;
    }
    return arr
}



console.log(null)


function FlatArray(arr){

    let flat =[]
    for(let i=0;i<arr.length;i++){
        if(Array.isArray(arr[i])==false){
            flat.push(arr[i])
        }
        else flat = flat.concat(FlatArray(arr[i]))
    }
   
       return flat
}

let re = FlatArray([1,[5,[6,8]]])
console.log(re)


function isPrimeNum(num) {

    if (num < 2) return true
    for (let i = 2; i < num; i++) {
        if (num % i == 0) return false
    }
    return true
}

//let result =  isPrimeNum(1)
//console.log(result)


function ChbeckBelow1000isPrime() {
    let num1 = 4
    let num2 =7
    let arr =[]
    while (num1 <= num2 ) {
        if (isPrimeNum(num1)==true) arr.push(num1)
        num1++
    }
  
    return arr
}
   let r = ChbeckBelow1000isPrime() 
   console.log(r)


   


var trap = function(height) {
    let result = 0;
    let left = 0;
    let right = height.length - 1;
    let leftMax = 0;
    let rightMax = 0;
    while (left < right) {
        if (height[left] < height[right]) {
            if (height[left] >= leftMax) {
                leftMax = height[left];
            } else {
                result += leftMax - height[left];
            }
            left++;
        } else {
            if (height[right] >= rightMax) {
                rightMax = height[right];
            } else {
                result += rightMax - height[right];
            }
            right--;
        }
    }
    return result;
    
    
}


function  reverse(arr){
       
        
    let i=0
    let j=arr.length-1
    while(i<j){
        [arr[i],arr[j]]=[arr[j],arr[i]]
        i++
        j--
    }
    
    return arr
}


let j =  reverse([2,4,3])


console.log(j.join(""))