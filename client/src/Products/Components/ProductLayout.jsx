
import Header from './Header';
import { AddButton } from './AddButton';
import { ListProducts } from './ListaProducts';
const ProductLayout=()=>{
    return (
        <>
            <Header title='Product Layout' /> 
            <AddButton/>
            <br></br>
            <ListProducts/>
        </>
    )
    
}

export default ProductLayout