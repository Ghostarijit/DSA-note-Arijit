function reverse(str){
    if(str.length<=1) return str

    return reverse(str.slice(1)) + str[0]
}


let res = reverse("Arijit")
console.log(res)

let arr = [1,2,[3,8],7,8,2,[91,24]]


let ress = arr.reduce((a,b)=>a.concat(b),[])
console.log(ress)



function palindrtome(str){


if(str.length<=1) return true
    let l = str[0]
    let r = str.length-1
    if(l==r) return palindrtome(str.slice(1,-1))
    else return false
}

let store = palindrtome("racecar")





function isInteger(num){

if(typeof num !=="number") return false
    return !isNaN(num) && parseInt(Number(num))==num && !isNaN(parseInt(num,10))
}



  let k = isInteger(-7.00)

  console.log(k)
