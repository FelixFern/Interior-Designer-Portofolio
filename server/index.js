const express = require('express')
const app = express()
const path = require('path')
const GPD = require('./getPortofolioData')

const port = 3001

app.get("/", (req, res) => {
    // res.send("Hello world")
    res.send(GPD.GPD(path.resolve(__dirname,"..")+"/public/project/portfolios"))
})
app.listen(3001, () => {
    console.log("Server is listening on port " + 3001)
})