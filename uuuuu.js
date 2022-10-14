  let arr = [3, 7, 9, 1, 4, 6, 2]



  function Rotation(arr,k){


for(let i=0;i<k;i++){
      
     arr.unshift(arr.pop())

     console.log(arr)

}


  }



  let result = Rotation([3, 7, 9, 1, 4, 6, 2],2)


  console.log(result)

let array = [1,2,[6,5],3,2,8,[1,0,[10,12]]]


let v = array.reduce((a,b)=>a.concat(b),[])

console.log(v)