import React, {useState} from 'react';

const Box = ({ color, width, height, id, removeBox }) => {
  const testId = `box${id}`;
  const removeThis = () => { removeBox(id) };
  return (
    <div className="Box">
      <div 
        className="boxDiv"
        style={{
          backgroundColor: color,
          width: `${width}px`,
          height: `${height}px`
        }}
        data-testid={testId}
      >
      </div>
      <button 
        className="removeBoxButton"
        onClick={removeThis}
      >
        X
      </button>
    </div>
  )
}

export default Box;
