const mongoose= require('mongoose')
const connection=mongoose.connect('mongodb://127.0.0.1:27017/todolist')
.then(()=>{
    console.log('server is connected')
})
.catch(()=>{
    console.log('connection failed')
})
module.exports=connection