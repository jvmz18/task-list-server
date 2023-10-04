const express = require ('express')
const app = express()
app.get ('/',(req,res) => res.json({"id":"123456",
"isCompleted":false,
"description":"Walk the dog",}))  
app.listen(3000)