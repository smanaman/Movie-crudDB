const express=require('express')
const app=express()

const path=require('path')
const db=require('./config/db')
app.set('view engine','ejs')
app.use(express.urlencoded({extended:true}))
app.use('/',require('./routers/index'))
app.use('/uploads',express.static(path.join(__dirname,'uploads')))
app.listen(3000,()=>{
    console.log('Server is running on port 3000')
    console.log('http://localhost:3000');
    
})  