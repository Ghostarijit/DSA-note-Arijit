







function print100(num){

   if(num==100) return num

  console.log(num)
   return print100(num+1)
}
 


let res = print100(1)
console.log(res)