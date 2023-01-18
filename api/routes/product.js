const express=require('express')
const upload=require('../libs/storage')
const api=express.Router()
const {addProduct}=require('../controllers/product')

//'image' tiene que ser lo mismo que pongas en el rom-dat y en el name del input(name='image')
api.post('/products', upload.single('image'),addProduct)

module.exports=api