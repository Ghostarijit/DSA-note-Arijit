function createPyramid(rows)
{
    for (let i = 0; i < rows; i++) {
        var output = '';
        for (let j =0; j < rows - i; j++) output += ' ';
        for (let k = 0; k <= i; k++) output += '* ';
        console.log(output);  
    } 
}

createPyramid(10)

function Order(order){

    console.log("Order",order)

    placed(function(){

        console.log("Delivered order",order)
    })
}

function placed(callback){

    setTimeout(callback,3000);
}

Order(1)
Order(2)
Order(3)
Order(4)

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("foo");
    }, 300);
    reject("sorry")
  })

 
  
  myPromise.then((x)=>{
    console.log(x)
  }).catch((err)=>{
    console.log(err)
  })
   function WildcardCharacters(str) { 


    let strArr= str.split(' ')
    let specChar = strArr[0]
    let charStr = strArr[1].split('')
    
    let arr = specChar.split('')
    let letters = /^[A-Za-z]+$/
    let nums = /^[0-9]+$/
    let i = 0
    while(i< arr.length){
        if(arr[i] == '$'){
            if(!charStr[0].match(nums)) return "false"
           charStr = charStr.slice(1)
        }
        if(arr[i] == '+'){
            if(!charStr[0].match(letters)) return "false"
           charStr = charStr.slice(1)
        }
        else if(arr[i] == '*'){
            let curr = charStr[0]
            let j = 1, k = 0
            if(arr[i+1] != undefined && arr[i+1] == '{'){
                k = arr[i+2]
                i = i+4
            }else{
                k = 3
                i++
            }
            
            while(j < k){
              charStr = charStr.slice(1)
              if(charStr[0] != curr) return "false"
              j++
            }
            charStr = charStr.slice(1)
            continue
        }
        i++ 
      }
      if(charStr.length != 0) return 'false'
       return "true" 
  }

 //console.log(WildcardCharacters("+++++* abcdemmmmmm"));
 //console.log(WildcardCharacters("$**+*{2} 9mmmrrrkbb"));

 let arr1 = [1,4,7,9,8]
 let arr2 =[2,3,5,4,8]

 for(let i=0;i<arr1.length;i++){
  if(arr2.includes(arr1[i])==true){

    let findex = arr1.indexOf(arr1[i])
    let lindex = arr2.indexOf(arr1[i])

    arr1.splice(findex,1)
    arr2.splice(lindex,1)
  }

 
 }

 console.log(arr1)
 console.log(arr2)

 