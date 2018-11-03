const express = require('express')
const bodyParser = require('body-parser')
const port = process.env.PORT || 5555;

let app = express();
let knex = require('./db/knex')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/url', function (req, res) {
    knex.select().from('table').then(function (result) {
        res.send(result);
    })
})

app.post('/url', function(req, res){
    knex.select().from('table').then(function (result) {
        res.send(result);
    })
})

app.listen(port, () =>{
    console.log("listening:", port)
})