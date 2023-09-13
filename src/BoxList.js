import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
    // set state (boxes) initially to an empty array
    const [boxes, setBoxes] = useState([]);
     // 'addTodo' is a function that's passed down to 'form' which is called when submit form. Adds a new todo to 'todos' state
    // pass in the values of height, width and backgroundColor from what's in state in 'formData' in NewBoxForm (values in form inputs)
    const addBox = ({height, width, backgroundColor}) => {
        // reset state (boxes) by creating a new array with all the existing boxes in 'boxes' as well as a new object with the values of height, width and background color of new box
        setBoxes(boxes =>[...boxes, {height, width, backgroundColor}])
        console.log(boxes)
    };

    const remove = id => { 
    // 'id' passed in to remove() is the id of the box to be removed

    // filter() interates over the in-state 'boxes' array and passes in id through the callback function. When the id of the box being looped over, box.id !== id (id of box to be deleted) returns false (means box.id===id), that 'box' element from the array is not added to the new array created. SetBoxes is now passed that new array and changes the stored state of 'boxes' to this new array without the box that was deleted.
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div>
            {/* render NewBoxForm with the addBox function passed in so addBox can be called when form is submitted */}
            <NewBoxForm addBox={addBox} />
            {/* iterate over each box in the boxes array and render the Box component with the values of what's in state in 'formData' passed in  */}
            {boxes.map(box => (
                <Box 
                    key={box.id}
                    id={box.id} 
                    height={box.height} 
                    width={box.width} 
                    backgroundColor={box.backgroundColor} 
                    handleRemove={remove} 
                />
            ))}
             
        </div>    
    
  )
}

export default BoxList;







