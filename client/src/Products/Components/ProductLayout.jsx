import { Modal } from 'react-bulma-components';
import Header from './Header';
import  AddButton  from './AddButton';
import  ListProducts  from './ListaProducts';
import Form from './form'
import { useState } from 'react';
const ProductLayout=()=>{
    const [isModalOpen,setIsModalOpen]=useState(false)
    return (
        <>
            <Header title='Product Layout' /> 
            <AddButton onClick={()=>{setIsModalOpen(true)}}/>
            <br></br>
            <ListProducts/>
            <Modal show={isModalOpen} onClose={()=>{setIsModalOpen(false)}}>
                <Modal.Card>
                <Modal.Card.Header showClose={false}>
                       <Modal.Card.Title>
                       Add Product
                       </Modal.Card.Title>
                    </Modal.Card.Header>
                    <Modal.Card.Body>
                        <Form/>
                    </Modal.Card.Body>
                </Modal.Card>
            </Modal>
        </>
    )
    
}

export default ProductLayout