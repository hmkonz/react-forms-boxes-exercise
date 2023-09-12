import React, {useState} from 'react';
import { v4 as uuid } from "uuid";


const NewBoxForm = ({addBox}) => {
    const INITIAL_STATE = {
        height:"",
        width:"",
        backgroundColor:""
    }

    const [formData, setFormData] = useState(INITIAL_STATE);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        addBox({ ...formData, id: uuid() })
        setFormData(INITIAL_STATE)
    }


    return (
        <div>
            <form onSubmit ={handleSubmit}>
                <div>
                    <label htmlFor = "height">Height</label>
                    <input 
                        id='height'
                        type="text"
                        name="height"
                        placeholder="Height"
                        value={formData.height}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor = "width">Width</label>
                    <input 
                        id='width'
                        type="text"
                        name="width"
                        placeholder="Width"
                        value={formData.width}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor = "backgroundColor">Background Color</label>
                    <input 
                        id='backgroundColor'
                        type="text"
                        name="backgroundColor"
                        placeholder="Background Color"
                        value={formData.backgroundColor}
                        onChange={handleChange}
                    />
                </div>
                <button>Add a new box!</button>
            </form>
        </div>    
    )
}


export default NewBoxForm;