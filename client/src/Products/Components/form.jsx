
import { useState ,useRef} from "react"
import { Form as BulmaForm ,Button} from "react-bulma-components"

const {Field, Control , Label , Input}=BulmaForm;

const Form=({handleSubmit})=>{

    const [formValues, setFormValues]=useState({
        name:'',
        priceUnitary:'',
        size:'',
        description:''
    })

    const inputfileRef=useRef()
    const handleChange=(e)=>{
        const {name, value}=e.target;
        setFormValues({...formValues,
                    [name]:value})
    }

    const _handleSubmit=(e)=>{
        e.preventDefault()
        handleSubmit({...formValues, image:inputfileRef.current.files[0]})
        console.log(formValues)
        console.log(inputfileRef.current.files)
    }
    return(
        <form onSubmit={_handleSubmit}>
            <Field>
                <Label>Name</Label>
                <Control>
                    <Input placeholder={""}
                            name='name'
                            onChange={handleChange}
                            value={formValues.name}
                            />
                </Control>
            </Field>
            <Field>
                <Label>Unitary Price:</Label>
                <Control>
                    <Input placeholder={""}
                            type="number"
                            name='priceUnitary'
                            onChange={handleChange}
                            value={formValues.priceUnitary}
                            />
                </Control>
            </Field>            
            <Field>
                <Label>Size:</Label>
                <Control>
                    <Input placeholder={""}
                            type="number"
                            name='size'
                            onChange={handleChange}
                            value={formValues.size}
                            />
                </Control>
            </Field>
            <Field>
                <Label>Description:</Label>
                <Control>
                    <Input placeholder={""}
                            name='description'
                            onChange={handleChange}
                            value={formValues.description}
                            />
                </Control>
            </Field>
            <Field>
                <Label>Photo:</Label>
                <Control>
                    <input type='file' ref={inputfileRef}/>
                </Control>
            </Field>
            <Field>
            <Button color="primary">
                        Save
                    </Button>
            </Field>
        </form>
    )
}

export default Form 