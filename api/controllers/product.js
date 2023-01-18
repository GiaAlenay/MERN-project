const Product=require('../models/product')

const addProduct=async(req,res)=>{
    try {
        const{name,size,unitaryPrice,description}=req.body

        const producto=Product({
            name,size,unitaryPrice,description
        })

        if (req.file) {
            const {filename}=req.file
            producto.setImgUrl(filename)
        }

        const productStored=await producto.save()
        res.status(200).send({ productStored})
        
    } catch (error) {
        res.status(500).send({msg:error.message})
    }
}
module.exports={addProduct}