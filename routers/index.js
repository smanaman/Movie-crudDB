const express=require('express')
const multer=require('multer')
const path=require('path')
const fs=require('fs')
const router=express.Router()

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.originalname)
  }
})

const ImageUploads = multer({ storage: storage }).single('image')
const homeControoller=require('../controller/ControllerCrud')


router.get('/',homeControoller.home)
router.get('/adddata',ImageUploads,homeControoller.AddMovie)
// router.post('/adddata',ImageUploads,homeControoller.AddMovie)



module.exports=router