const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const port = process.env.PORT || 8000;


//
const apiData = require("./jsondata.json");
app.listen(port, () => {
    console.log('This app is running on');
});
app.get('/', (req, res) => {
    res.send('<h1>Hello me</h1>');
});
app.get('/endpoint', (req, res) => {
    res.send('<h1>Hello</h1>');
});
app.get('/service', (req, res) => {
    res.send(apiData);
});