
const MovieData=require('../model/AdminTbl')
const fs=require('fs')
const path=require('path')

const home=(req,res)=>{
    res.render('Home')
}
const AddMovie=(req,res)=>{
    res.render('AddData')
}
const AddMoviePost=(req,res)=>{
    
}
module.exports={
    home,
    AddMovie,
}