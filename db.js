const mongoose= require('mongoose')
require("dotenv").config()
const connection=mongoose.connect(process.env.DB_URL)
.then(()=>{
    console.log('server is connected')
})
.catch(()=>{
    console.log('connection failed')
})
module.exports=connection