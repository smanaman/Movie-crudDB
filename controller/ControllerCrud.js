
const MovieData = require('../model/AdminTbl')
const fs = require('fs')
const path = require('path')

const home = async(req,res) => {
    const AllMovieData = await MovieData.find()
   
    
    res.render('Home', { AllMovieData })
}
const AddMovie = (req, res) => {
    res.render('AddData')
}
const AddMoviePost =async (req, res) => {
    const { title,url, year, director, duration, genres, description } = req.body
    let image = ''
    if (req.file) {

        image = req.file.path

    }
   await MovieData.create({
        title,
        url,
        year,
        director,
        duration,
        genres,
        description,
        image: image
    })
    res.redirect('/')
}

const EditGet=async(req,res)=>{
const id=req.query.id
// console.log(id);

const MovieDataEdit=await MovieData.findById(id)




    res.render('EditData',{MovieDataEdit})

}
const EditPost=async(req,res)=>{
const id=req.query.id
console.log(id);
let image=''
if(req.file){
    const oldImage = await MovieData.findById(id)

    fs.unlinkSync(oldImage.image)
    image = req.file.path
}
const { title, url, year, director, duration, genres, description } = req.body
await MovieData.findByIdAndUpdate(id,{
    title,
    url,
    year,
    director,
    duration,
    genres,
    description,
    image
})
res.redirect('/')

}
const DeletData=async(req,res)=>{

const id=req.query.id

let deldata=await MovieData.findByIdAndDelete(id)

fs.unlinkSync(deldata.image)

res.redirect('/')
}

module.exports = {
    home,
    AddMovie,
    AddMoviePost,
    EditGet,
    EditPost,
    DeletData
}