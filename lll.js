

let array = [1,0,8,0,5,0,9,2,4]



let k=[]
for(let i=0;i<array.length;i++){
	if(array[i] !=0) k.push(array[i])
}

for(let i=0;i<array.length;i++){
	if(array[i] ==0) k.push(array[i])
}

console.log(k)


let i=0
let j=array.length-1

while(i !=array.length-1 && i<j){
	if(array[i]==0){
       [array[i],array[j]]=[array[j],array[i]]
	    j--

	}
	i++
}
console.log(array)



