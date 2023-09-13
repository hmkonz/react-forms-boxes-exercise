import React from 'react';

// pass the values of id, height, width, backgroundColor as well as the handleRemove function from BoxList to the Box component
const Box = ({id, height, width, backgroundColor, handleRemove}) => {
    // the id passed in to handleRemove is the id of the box to be deleted
    const remove = () => handleRemove(id);
    return (
        <div>
            {/* display the new box, styled with a height, width and backgroundColor from form input values */}
            <div style={{height: `${height}em`, width: `${width}em`, backgroundColor}}/>
             {/*add a button with each new box created that whcn clicked will remove the box  */}
            <button onClick={remove}>X</button>
        </div>
    )
}





export default Box;