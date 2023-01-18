const mongoose=require('mongoose');
const Schema=mongoose.Schema;
const {appCon}=require('../config')

const ProductSchema=Schema({
    name:String,
    size:Number,
    unitaryPrice:Number,
    url:String,
    description:String,
},{timestamps:true})

ProductSchema.methods.setImgUrl=function setImgUrl(filename){
    const {host ,port}= appCon;
    this.url=`${host}:${port}/public/${filename}`
}

module.exports=mongoose.model('Products',ProductSchema)
