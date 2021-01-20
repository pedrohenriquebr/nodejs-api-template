const express = require("express");
const bodyParser = require('body-parser');
const app  = express();
const items = require('./items.json');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require('dotenv').config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World!');
});

//Items router
app.route('/items')
    .get((req, res) => {
        res.send(items);
    })

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});