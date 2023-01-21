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

export const  saveProduct=async(ProductData)=>{
    try {
        const response= await axios({
            url:`${baseUrl}/products`,
            method:'POST',
            data:ProductData
        })
        return response
    } catch (error) {
        console.log(error)
    }
}

