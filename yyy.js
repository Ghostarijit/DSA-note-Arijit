// shivanka.tiwari@hippoinnovations.com


let str = "computer"
let arr1 = str.split("")
let array = "68727153"
let arr2 = array.split("")




let res = []
while (arr1.length != 0) {

    res.push(arr1[0])
    arr1.splice(arr1.indexOf(arr1[0]), 1)
    res.push(arr2[0])
    arr2.splice(arr2.indexOf(arr2[0]), 1)
    res.push(arr1.pop())
    res.push(arr2.pop())

}

console.log(res.join(""))







// program to display fibonacci sequence using recursion
function fibonacci(num) {
    if(num <=2) return num
return fibonacci(num-1) + fibonacci(num-2)
} 

let ress = fibonacci(15)
console.log(ress)


var a = "arijit"
var b = 10
var c = 30


console.log(c+b+a)


function palindrome(str){

    if(str.length<=1) return true
    
    let l = str[0]
    let r = str.slice(-1)
    if(l==r) return palindrome(str.slice(1,-1))
    else return false
    
    }
    
    let result = palindrome("racecar")
    console.log(result)


let reverse = (str)=>{

  if(str.length <=1) return str

    return reverse(str.slice(1)) + str[0]
}


let n = reverse("hariOm")
console.log(n)




function check(str){

    let arr = str.split(" ")
    let i=0
    let j=arr.length-1

    while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
        i++
        j--
    }
    return arr.join(" ")
}



let resf = check("my name is Arijit")
console.log(resf)








function arijit(){


    

    
}









































