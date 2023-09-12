import React, {useState} from "react";
import Box from "./Box";
import NewBoxForm from "./NewBoxForm";


const BoxList = () => {
   const [boxes, setBoxes] = useState([]);

   const addBox = ({height, width, backgroundColor}) => {
        // returns a new array with all the existing boxes as well as a new object with id, height, width and background color of new box
        setBoxes(boxes =>[...boxes, {height, width, backgroundColor}])
   };

   const remove = id => { 
    // 'id' passed in to remove() is the id of the box to be removed

    // filter() interates over the in-state 'boxes' array and passes in each id through the callback function. When box.id !== id returns false (means box.id===id), that 'box' element from the array is not added to the new array created. SetBoxes is now passed that new array and changes the stored state of 'boxes' to this new array.
        setBoxes(boxes => boxes.filter(box => box.id !== id));
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
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







