const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const GPD = require('./getPortofolioData')

const port = 3001

app.use(cors())

app.use('/',express.static(path.join(__dirname, '../build')));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
app.get('/portofolio', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});
app.get('/portofolio/*', function (req, res) {
    res.sendFile(path.join(__dirname, '..', 'build', 'index.html'));
});

app.get("/api", (req, res) => {
    // res.send("Hello world")
    res.json(GPD.GPD());
})

app.get("/api/carousel", (req,res) => {
    res.json(GPD.getCarousel());
})

app.listen(port, () => {
    console.log("Server is listening on port " + port)
})