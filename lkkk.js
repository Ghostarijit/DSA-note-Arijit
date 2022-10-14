


function check(str){

    let arr = str.split(" ")
    let i=0
    let j=arr.length-1

    while(i<j){
        [arr[i],arr[j]] = [arr[j],arr[i]]
    }
    return arr
}



let res = check("my name is Arijit")
console.log(res)

