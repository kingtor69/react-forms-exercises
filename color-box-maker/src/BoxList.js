import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm.js';
import Box from './Box.js';

const BoxList = () => {
    const initialBoxState = [
        {
            color: "blue",
            width: 150,
            height: 90
        }
    ];
    const [ boxes, setBoxes ] = useState(initialBoxState);
    return (
        <div className="NewBoxList">
            <NewBoxForm 
                setBoxes = {setBoxes}
            />
            {boxes.map((box, i) => (
                <Box 
                    color={box.color}
                    width={box.width}
                    height={box.height}
                    testId={`box${i}`}
                    key={i}
                />)
            )}
        </div>
    );
};

export default BoxList;
