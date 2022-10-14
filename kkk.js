

// Q1
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



//Q3
function rotation(str,k){

    let array = str.split(" ")
    for(let i =0;i<k;i++){
        array.unshift(array.pop())
        console.log(array.join(" "))
    }
    }
    
    let result = rotation("Ram is Playing Cricket",3)
    
    console.log(result)


 // Q2
 
 function Allposible(patt,txtt){
let pat = patt.toUpperCase()
let txt = txtt.toUpperCase()
let n= txt.length
let m= pat.length

let storedpat = pat

storedpat = storedpat.split(' ').sort().join("")
let temp ;
let count=0
for(let i=0;i<=n-m;i++){

    temp = ""
    for(let k=i;k< m+i;k++){
        temp+=txt[k]
        temp = temp.split(' ').sort().join("")
    }
 if(storedpat == temp) count++

}

return count
 }

 let ress = Allposible("AbrAcadAbra","cAda")

console.log(ress)


let str1 = "AbrAcadAbra"


/*let arr1 = str1.toLowerCase().split("")

let str2 = "cAda"
let arr2 = str2.toLowerCase().split("")


let map = new Map()

for(let i=0;i<arr1.length;i++){

    if(arr2.includes(arr1[i]) && map.get(arr1[i])==undefined){
         map.set(arr1[i],1)
    }
    else if(arr2.includes(arr1[i])) map.set(arr1[i],map.get(arr1[i])+1)
}


let arr = []

for(let pairs of map){
  

}

console.log(map)


// try the Quention 2 but its need time more and i just tryed as much possible but i think need time*/