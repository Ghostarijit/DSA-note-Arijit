let express = require("express")
let App = express()
let axios = require("axios")


App.get("/postman", (req, res) => {

  let endpoint = [
    'https://api.github.com/users/ejirocodes',
    'https://api.github.com/users/ejirocodes/repos',
    'https://api.github.com/users/ejirocodes/followers',
    'https://api.github.com/users/ejirocodes/following'
  ];
  let arr=[]

  axios.all(endpoint.map((data) => axios.get(data))).then((data) => {


         for(let i=0;i<data.length;i++){
             //  arr.push(JSON.parse(JSON.stringify(data[i])))

               arr.push(data[i])
         }


    
  })
  res.send(arr)
})

App.listen(4000, () => {
  console.log("Server Connected")
})





