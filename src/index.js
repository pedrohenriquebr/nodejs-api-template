const express = require("express");
const app  = express();
const items = require('./items.json');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
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