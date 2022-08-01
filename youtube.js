let express = require("express")

let app = express()

app.get("/postman",function(req,res){
   
      res.send("hii, Arijit")
     
})
app.listen(4000)





var arr = [3, 2, 1, 5, 4]

for (let i = 1; i <= 2; i++) {

    let max = Math.max(...arr)

    let min = Math.min(...arr)

    let maxInd = arr.indexOf(max)
    let minInd = arr.indexOf(min)

    arr.splice(maxInd, 1)
    arr.splice(minInd, 1)
    arr.push(max - min)


    //console.log(arr.reduce((a,b)=>a+b))


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