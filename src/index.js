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
        res.json(items);
    })
    .post((req,res)=>{
        const {title, priority} = req.body;
        const lastId = items.sort((a, b) => a.id - b.id).slice(-1)[0].id;
        items.push({
            id: lastId + 1,
            title,
            priority,
            created: new Date(Date.now())
                .toISOString()
                .split('T')[0]
        });

        res.send({Id: lastId + 1});
    })

app.listen(port, ()=>{
    console.log(`Listening at http://localhost:${port}`);
});