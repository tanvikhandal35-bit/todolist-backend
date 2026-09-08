const express = require('express');
const {postapi,getapi,updateapi,deleteapi} = require('./api');
const connection = require('./db');
const app = express();

app.use(express.json())

connection
app.post('/todo', postapi)
app.get('/todo',getapi)
app.put('/todo/:id',updateapi)
app.delete('/todo/:id',deleteapi)

app.listen(3000, () => {
    console.log("server running")
})