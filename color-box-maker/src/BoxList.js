import React, { useState } from 'react';
import NewBoxForm from './NewBoxForm.js';
import Box from './Box.js';

const BoxList = () => {
  const initialBoxState = [
    // {
    //   color: "blue",
    //   width: 150,
    //   height: 90
    // }
  ];
  const [ boxes, setBoxes ] = useState(initialBoxState);
  const makeNewBox = (newBoxData) => {
    setBoxes(boxes => [...boxes, newBoxData])
  };

  const removeBox = (boxId) => {
    setBoxes(boxes.filter ((b, i) => (i !== boxId)));
  };

  return (
    <div className="NewBoxList">
      <NewBoxForm 
        setBoxes = {setBoxes}
        makeNewBox={makeNewBox}
      />
      {boxes.map((box, i) => (
        <Box 
          color={box.color}
          width={box.width}
          height={box.height}
          id={i}
          key={i}
          removeBox={removeBox}
        />)
      )}
    </div>
  );
};

export default BoxList;
