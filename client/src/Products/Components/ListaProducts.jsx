import { useState } from "react"
import { Loading } from "./Loading"
import { useEffect } from "react"
import { getProducts } from "../Services"
const ListProducts=()=>{
    const [isLoading,setIsLoading]=useState(true)
    const [products,setProducts]=useState([])

    useEffect(()=>{
        async function loadProducts(){
            const response=await getProducts()
            console.log('productos', response.data.products)
            if(response.status===200){
                setProducts(response.data.productos)
            }
            setIsLoading(false)
        }
        loadProducts()
    })

    if(isLoading){
        return <Loading/>
    }
    if(!products?.length){
        return <h3 className="title has-text-centered"> You don't have products. </h3>
    }
    return (
        'mostrar listado'
    )
}

export default ListProducts