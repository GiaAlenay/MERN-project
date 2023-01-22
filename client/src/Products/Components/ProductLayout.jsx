import { Modal,Container } from 'react-bulma-components';
import Header from './Header';
import  AddButton  from './AddButton';
import  ListProducts  from './ListaProducts';
import Form from './form'
import { useEffect, useState } from 'react';
import { saveProduct } from '../Services';
import { getProducts } from '../Services';
import { Loading } from './Loading';
const ProductLayout=()=>{
    const [isModalOpen,setIsModalOpen]=useState(false)
    const [isLoading,setIsLoading]=useState(true)
    const [products,setProducts]=useState([])

    async function loadProducts(){
        const response=await getProducts()
        console.log('productos', response.data.products)
        if(response.status===200){
            setProducts(response.data.productos)
        }
        setIsLoading(false)
    }

    useEffect(()=>{        
        loadProducts()
    })
    const handleSubmit=async(data)=>{
        await saveProduct(data)
        loadProducts()
        setIsModalOpen(false)
    }

    return (
        <Container>
            <Header title='Product Layout' /> 
            <AddButton onClick={()=>{setIsModalOpen(true)}}/>
            <br></br>
            {isLoading && <Loading/>}
            {!isLoading && !products?.length && (
                 <h3 className="title has-text-centered">
                     You don't have products. 
                </h3>
            )}
            {!isLoading && products?.length &&  <ListProducts products={products}/> }
            
            <Modal show={isModalOpen} onClose={()=>{setIsModalOpen(false)}}>
                <Modal.Card>
                <Modal.Card.Header showClose={false}>
                       <Modal.Card.Title>
                       Add Product
                       </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit}/>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </Container>
    )
    
}

export default ProductLayout