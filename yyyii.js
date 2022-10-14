


let books = [
    { title: "C++", author: "Bjarne" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "Java", author: "James" },
    { title: "Python", author: "Guido" },
    { title: "C++", author: "Bjarne" },
];




let a = new Set()

let arr = []

for (let i = 0; i < books.length; i++) {

    if (a.has(books[i].title) == false) {
        arr.push(books[i])
        a.add(books[i].title)
    }
}

console.log(arr)




const length = 4;
const numbers = [];
for (var i = 0; i < length; i++) console.log(i);

console.log(i)
{


    numbers.push(i + 1);

}
console.log(numbers);


let express = require("express")
let App = express()

App.get("/hellow",(req,res)=>{

    let a = [1,2,3]

    res.status(201).send({status:true,msg:a})
})

App.listen(3000,()=>{
    console.log("Server Connected")
})











