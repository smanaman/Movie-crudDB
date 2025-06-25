const mogoose=require('mongoose')

mogoose.connect('mongodb://localhost:27017/crudmvc')

const db=mogoose.connection

db.once('open',()=>{
    console.log('Database connected successfully')
})