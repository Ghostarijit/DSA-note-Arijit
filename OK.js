/*function sum(array, arr) {

    let obj = {}
    let obj2 = {}
    for (let i = 0; i < array.length; i++) {
        obj[array[i]] = (obj[array[i]] || 0) + 1
    }
    for (let i = 0; i < arr.length; i++) {
        obj2[arr[i]] = (obj2[arr[i]] || 0) + 1
    }
    for (let key in obj) {
      
        if (!obj2[key]) {
            return false
        }

        if(obj[key] !== obj2[key]) return false
       
    }


    return true
}




 

let result = sum("hellow", "lloweh")

console.log(result)*/

/*function FirstPairSumZero(array) {



    let Left = 0
    let Right = array.length - 1

    while (Left < Right) {
        if (array[Left] + array[Right] == 0) return [array[Left], array[Right]]

        else if (array[Left] + array[Right] > 0) Right--

        else Left++
    }
}
let result = FirstPairSumZero([-5, -3, -2, 1, 2, 3, 4])
console.log(result)*/


/*function FirstPairSumZero(array) {



    let Left = 0
    let Right = array.length - 1

    while (Left < Right) {
        if (array[Left] + array[Right] == 0) return [array[Left], array[Right]]

        else if (array[Left] + array[Right] > 0) Right--
        
        else Left++
    }
}
let result = FirstPairSumZero([-5, -3, -2, 1, 2, 3, 4])
console.log(result)*/

/*function FindCloseSum(array,sum) {



    let Left = 0
    let Right = array.length - 1
    let Close = Number.MAX_VALUE

    while (Left < Right) {
        if ((array[Left] + array[Right] - 12) < Close) {
           // Left = Left
           // Right = Right
            Close = array[Left] + array[Right] - 12
        }

        else if ((array[Left] + array[Right]) - sum > Close) Right--
        
        else Left++
    }
    return [array[Left],array[Right]]
}
let result = FindCloseSum([1, 2, 5, 8, 9, 14],11)
console.log(result)*/

// abc


/*function same(arr1,arr2) {
    
let farr = arr1.split("")
let larr = arr2.split("")
let count =[]
for (let i = 0; i < farr.length; i++) {
    for (let j = 0; j < larr.length; j++) {
    
    if(farr[i]==larr[j]) {
        count.push(farr[i])
        
    } 
  
    } 
}

for (let i = 0; i < larr.length; i++) {

if(!count.includes(larr[i])) count.push(larr[i])


} 

return count.join('')
}

let result = same("bcdefg","abcdefgh")
console.log(result)*/

/*function bigsum(array, k) {
    let sum =  0
    let FinalSum = 0

    for (let i = 0; i < k; i++) {

        sum += array[i]


    }

    for (let j = k; j < array.length; j++) {

        sum = sum -array[j-k]+array[j]
        if (FinalSum < sum) {
            FinalSum = sum
        }

    }

    return FinalSum
}

let result = bigsum([1, 2, 5, 4, 5, 6, 7, 8, 2, 10, 1], 3)
console.log(result)*/

/*function LongestSub(str) {

    let stIdxOfSub = 0
    let edInxOfSub = 0

    let ws = 0, we = 0

    let windowMap = {}

    while (we <= str.length - 1) {
        if (!windowMap[str[we]]) {
            windowMap[str[we]] = 1

            if (we - ws > edInxOfSub - stIdxOfSub) {

                stIdxOfSub = ws
                edInxOfSub = we
            }
            we++
        } else {
            while (str[ws] != str[we]) {
                delete windowMap[str[ws]]
                ws++

            }
            ws++
            we++
        }
    }

    let res = ""
    for (let i = stIdxOfSub; i <= edInxOfSub; i++) {
        res += str[i]
    }
  let result =   edInxOfSub-stIdxOfSub+1
   
    if(str.length==0) return 0
    else return  result

   // console.log(windowMap, stIdxOfSub, edInxOfSub, res)
}

let result = LongestSub("arijitbiswas ")
console.log(result)*/

/*function loggest(str, k) {
    let i = 0
    let j = 0
    let max = -Infinity
    let map = {}
    while (j <str.length ) {

        map[str[j]] = (map[str[j]] || 0) +1
        if (Object.keys(map).length < k) {
            j++

        }
        else if (Object.keys(map).length == k) {

            if (max < (j-i + 1))
                max = j-i + 1

            j++

        }
        else if (Object.keys(map).length > k) {

            while (Object.keys(map).length > k) {
                map[str[i]] = (map[str[i]] || 0) -1

                if (map[str[i]] == 0)

                    delete map[str[i]]

                i++
               
            }
            j++
        }
    }

    return max


}

let result = loggest("aabacbebebebe", 3)
console.log(result)*/

/*function mergeTwoLists(list1, list2) {
   
   let arr = []
   for(let i=0;i<list1.length;i++){
       arr.push(list1[i])
   }
   
    for(let j=0;j<list2.length;j++){
       arr.push(list2[j])
   }
   
   return arr.sort((a,b)=> a-b)
   
   
};

let result = mergeTwoLists([1,2,4], [1,3,4])
console.log(result)*/



/*function removeAnagrams(words) {
    
    const result = [];
    let lastWordSorted = null;
    for (let i = 0; i < words.length; i += 1) {
      const word = words[i];
     // return [...word]
      const currWordSorted = [...word].sort().join(''); 
      if (lastWordSorted !== currWordSorted) {
        result.push(word);
      }
      lastWordSorted = currWordSorted;
    }
    return result;
};

let result =  removeAnagrams(["abba","baba","bbaa","cd","cd"])

console.log(result)*/


/*function sum(arr){
    if (arr.length == 0) {
        return 
    }

    // if numbe isr ositpive
    else {
      let ele = arr.pop()
      if(ele%7==0){
        console.log("YES", ele)
      }else console.log("NO", ele)

    }
    sum(arr) 
}

console.log(sum([5,14,23,28]))



var firstUniqChar = function(s) {
    
    
    let Left = 0
   let Right = array.length - 1
   let findex = infinity
   //let cindex = 0
   while(Left<Right ){
       
       if(s[Left] !== s[Right]){
           Right--
          findex = Left
         
       }
       else if(s[Left] == s[Right]){
                Left++
                }
   
     
   }

   return findex
}*/

/*function multiplearray(arr){
//let arr = a.split("")

if(arr.length == 0) return 1
else


    return arr[0] *  multiplearray(arr.splice(1))
}

let result = multiplearray([1,2,3,1])
console.log (result)*/

/*function palindrome(str){

if(str.length<=1) return true

    let f = str[0]
    let l = str.slice(-1)
    if(f==l) return palindrome(str.slice(1,-1))
    else return false
}

let result = palindrome("eyk")
console.log(result)*/

/*function reverse(str){

if(str.length<=1) return str

    return  reverse(str.slice(1)) +str[0]
}

let result = reverse("arijit")
console.log(result)*/


/*function flatenArr(arr) {
    let flat = []
    for (let i = 0; i < arr.length; i++) {

        if (Array.isArray(arr[i]) == false) {
            flat.push(arr[i])
        } else flat = flat.concat(flatenArr(arr[i]))
    }
return flat
}

let result = flatenArr([1,2,[3,5,[4,[4,5,[[[[[[[[[[[9]]]]]]]]]]]]]]])
 
console.log(result)*/

/*function reverse(str){
    if(str.length<=1) return str

    return reverse(str.slice(1)) + str[0]
}

function reverseStntance(sentance) {
    let arr = sentance.split(" ")
for(let i=0;i<arr.length;i++){
     arr[i]= reverse(arr[i])
}
return arr.join(" ")
}

let result = reverseStntance("my name is arijit")

console.log(result)*/

/*function capitaliseFirst(arr){

    if(arr.length==0) return []

let result =[]

let s = arr[0][0].toUpperCase() + arr[0].slice(1)

result.push(s)
return result.concat(capitaliseFirst(arr.slice(1)))


}

let result = capitaliseFirst(["abc","mom"])

console.log(result)*/

/*function allchar(str) {

    let map = {}
    for (let i = 0; i < str.length; i++) {
        map[str[i]] = (map[str[i]] || 0) + 1
    }
    let dis = Object.keys(map).length

    let mapWindow = {}
    let i = 0
    let j = 0
    let count = 0
    let minlength = str.length
    let minstr = ""

    while (j != str.length) {
        if (mapWindow[str[j]]) {
            mapWindow[str[j]]++
        } else {
            mapWindow[str[j]] = 1
            count++
        }

        if (count < dis) {
            j++
        } else if (count == dis) {

            while (count == dis) {
                if (minlength > j - i + 1) {
                    minlength = j - i + 1
                    minstr = str.slice(i,j+1)
                }
                mapWindow[str[i]]--
                if (mapWindow[str[i]] == 0) {
                    count--
                }
                i++
            }
            j++
        }
    }
    return minstr

}

let result = allchar("aabbcc")
console.log(result)*/

function BinarySearch(arr, num) {

    let start = 0
    let end = arr.length-1

    if (start < end) {
        let mid = Math.round((start + end) / 2)
        if (num === arr[mid]) return mid
        else if (num > arr[mid]) return BinarySearch(arr, mid + 1, end, num)
        else return BinarySearch(arr, start, mid - 1, num)
    }
    return false
}

let result = BinarySearch([1,2,3,4,5,6,7,8,9,10,11], 8)
console.log(result)