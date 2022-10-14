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
//console.log(res)

let ar="Arijit"
let arr = ar.split("")

let i=0
let j=arr.length-1
while(i<j){
    [arr[i],arr[j]]=[arr[j],arr[i]]
    i++
    j--
}
let result=arr.join("")
console.log(result)


let getStates = async (req, res)=> {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    } catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let myPromise = new Promise((resolve ,reject)=>{

    let a= 2
    let b=5
    if(a==b) resolve("Hii,Success")
    else reject("Sorry Man")



})

myPromise.then((x)=>{
    console.log(x)
}).catch((y)=>{
    console.log(y)
})
