import React, {useState} from 'react';
import { v4 as uuid } from "uuid";


const NewBoxForm = ({addBox}) => {
    // sets the values of the inputs to empty strings (only see placeholder values)
    const INITIAL_STATE = {
        height:"",
        width:"",
        backgroundColor:""
    }
    // set state of formData to what's in INITIAL_STATE
    const [formData, setFormData] = useState(INITIAL_STATE);

    // when input values change, handleChange() is called. The value of the input is found in event.target.value and state is updated by adding name:value of input to the existing formData object
    const handleChange = (event) => {
        const {name, value} = event.target;
        // resets in-state formData to an object with the existing data as well as adding what's changed in the input of the form
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }

    // handleSubmit() is called when the form is submitted.
    const handleSubmit = (event) => {
        // prevent page from reloading
        event.preventDefault();
        // call the addBox function from BoxList component with what's in the formData object (height, width and backgroundColor) as well as the id of the new box passed in 
        addBox({ ...formData, id: uuid() })
        // reset input fields to empty strings so just place holders show
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