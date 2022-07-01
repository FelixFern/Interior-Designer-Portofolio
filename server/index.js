const express = require('express')
const app = express()

const port = 3001

app.get("/", (req, res) => {
    res.send("Hello world")
})
app.listen(3001, () => {
    console.log("Server is listening on port " + 3001)
})