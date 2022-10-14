let a = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 6
}
let b = {
    "b": 8,
    "c": 5,
    "e": 10,
    "f": 12,
    ...a
}
/*response {
    "a": 1,
    "b": [2,8],
    "c": [3,5],
    "d": 6,
    "e": 10, 
    "f": 12
}*/

//console.log(b)


 function getTime(s){
    let ans = 0
    let curr =0
    for(let i=0;i<s.length;i++){
        let k = s[i].charAt(0) - 'a'.charAt(0)
        console.log(s)
        let a = Math.abs(curr-k)
        let b = 26-Math.abs(curr-k)
        ans +=Math.min(a,b)
        ans++
        curr = s[i].charAt(0) - 'a'.charAt(0)
    }
    return ans
 }

 let res = getTime("zcd")

 console.log(res)



