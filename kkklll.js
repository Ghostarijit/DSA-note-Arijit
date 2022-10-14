let express = require("express")
let axios = require("axios")
let App = express()

App.get("/postman", (req, res) => {


      let result = axios.get("https://api.covidtracking.com/v1/states/info.json")

      result.then((x) => {
            console.log(x.data)

            let result = x.data
            let arr = []
            let arr1=[]

            for (let i = 0; i < result.length; i++) {
                  arr.push(result[i].state)
                  arr1.push(result[i].name)
            }


            let Doc ={
                  state:arr,
                  name:arr1
            }
            res.status(201).send({ status: true, data: Doc })
      }).catch((err) => {
            console.log("Error"+ err)
      })
})

App.listen(4000, () => {
      console.log("server Connected")
})