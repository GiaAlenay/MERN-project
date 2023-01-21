import axios from 'axios'

const baseUrl=process.env.REACT_APP_BASE_URL

export const  getProducts=async()=>{
    try {
        const response= await axios({
            url:`${baseUrl}/products`,
            method:'GET'
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

export const  saveProduct=async(productData)=>{
    try {
        const formData=new FormData()

        formData.append('name',productData.name)
        formData.append('unitaryPrice',productData.priceUnitary)
        formData.append('size',productData.size)
        formData.append('description',productData.description)
        formData.append('image',productData.image)
        const response= await axios({
            url:`${baseUrl}/products`,
            method:'POST',
            data:formData
        })
        console.log('aqui',formData)
        console.log(response)
        return response
    } catch (error) {
        console.log(error)
    }
}

