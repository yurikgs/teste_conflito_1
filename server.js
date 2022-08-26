
const express = require("express")
const app = express() 


app.get("/", (req, res) => {

    res.send("Hello World! + Olá Mundo! :)")
})



app.listen(3000, () => console.log("App rodando com conflito!"))

